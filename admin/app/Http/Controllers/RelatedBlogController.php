<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\RelatedBlog;
use Illuminate\Http\Request;

class RelatedBlogController extends Controller
{
    /**
     * Show the related blogs management page
     */
    public function index($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $relatedBlogs = $blog->relatedBlogs()->with('relatedBlog')->get();
        $availableBlogs = $blog->getAvailableRelatedBlogs();
        
        return view('admin.blogs.related.index', compact('blog', 'relatedBlogs', 'availableBlogs'));
    }

    /**
     * Store a new related blog
     */
    public function store(Request $request, $slug)
    {
        $request->validate([
            'blog_id' => 'required|exists:blogs,id',
            'related_blog_id' => 'required|exists:blogs,id|different:blog_id',
        ]);

        $blog = Blog::where('slug', $slug)->firstOrFail();
        
        // Check if relationship already exists
        $exists = RelatedBlog::where('blog_id', $request->blog_id)
            ->where('related_blog_id', $request->related_blog_id)
            ->exists();

        if ($exists) {
            return response()->json(['error' => 'This relationship already exists'], 422);
        }

        RelatedBlog::create([
            'blog_id' => $request->blog_id,
            'related_blog_id' => $request->related_blog_id,
            'sort_order' => RelatedBlog::where('blog_id', $request->blog_id)->max('sort_order') + 1,
        ]);

        return response()->json(['message' => 'Related blog added successfully']);
    }

    /**
     * Update the sort order of related blogs
     */
    public function updateOrder(Request $request, $slug)
    {
        $request->validate([
            'related_blogs' => 'required|array',
            'related_blogs.*.id' => 'required|exists:related_blogs,id',
            'related_blogs.*.sort_order' => 'required|integer|min:0',
        ]);

        foreach ($request->related_blogs as $item) {
            RelatedBlog::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return response()->json(['message' => 'Order updated successfully']);
    }

    /**
     * Remove a related blog
     */
    public function destroy($slug, $id)
    {
        $relatedBlog = RelatedBlog::findOrFail($id);
        $relatedBlog->delete();

        return response()->json(['message' => 'Related blog removed successfully']);
    }

    /**
     * Get available blogs for a specific blog
     */
    public function getAvailableBlogs($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $availableBlogs = $blog->getAvailableRelatedBlogs();
        
        return response()->json($availableBlogs);
    }
}
