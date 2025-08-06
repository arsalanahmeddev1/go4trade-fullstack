<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogApiController extends Controller
{
    public function index()
    {
        return response()->json(Blog::latest()->get());
    }

    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->first();

        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        // Get related blogs
        $relatedBlogs = $blog->relatedBlogs()
            ->with('relatedBlog')
            ->orderBy('sort_order')
            ->get()
            ->map(function ($relatedBlog) {
                return [
                    'id' => $relatedBlog->relatedBlog->id,
                    'title' => $relatedBlog->relatedBlog->title,
                    'slug' => $relatedBlog->relatedBlog->slug,
                    'summary' => $relatedBlog->relatedBlog->summary,
                    'content' => $relatedBlog->relatedBlog->content,
                    'created_at' => $relatedBlog->relatedBlog->created_at,
                    'updated_at' => $relatedBlog->relatedBlog->updated_at,
                ];
            });

        return response()->json([
            'blog' => $blog,
            'related_blogs' => $relatedBlogs
        ]);
    }
}
