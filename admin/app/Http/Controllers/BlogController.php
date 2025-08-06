<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return view('admin.blogs.index', compact('blogs'));
    }

    public function create()
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs,slug',
            'summary' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'content' => 'required|string',
        ]);
        
        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->title);
        $originalSlug = $slug;
        $counter = 1;
        while (Blog::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        Blog::create([
            'title' => $request->title,
            'slug' => $slug,
            'summary' => $request->summary,
            'meta_title' => $request->meta_title,
            'meta_keywords' => $request->meta_keywords,
            'meta_description' => $request->meta_description,
            'content' => $request->content,
        ]);

        return response()->json(['message' => 'Blog created']);
    }

    public function show(Blog $blog)
    {
        return view('admin.blogs.show', compact('blog'));
    }

    public function edit($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        return view('admin.blogs.edit', compact('blog'));
    }

    public function update(Request $request, $slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:blogs,slug,' . $blog->id,
            'summary' => 'nullable|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'content' => 'nullable|string',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->title);
        $originalSlug = $slug;
        $counter = 1;
        while (Blog::where('slug', $slug)->where('id', '!=', $blog->id)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $blog->update([
            'title' => $request->title,
            'slug' => $slug,
            'summary' => $request->summary,
            'meta_title' => $request->meta_title,
            'meta_keywords' => $request->meta_keywords,
            'meta_description' => $request->meta_description,
            'content' => $request->content,
        ]);
        return response()->json(['message' => 'Blog updated']);

    }

    public function destroy($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $blog->delete();
        return response()->json(['success' => true]);
    }
}
