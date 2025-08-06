<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\FaqCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = FaqCategory::all();
        $faqs = Faq::all();
        return view('admin.faqs.index', compact('categories', 'faqs'));
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = FaqCategory::all();
        return view('admin.faqs.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'answer' => 'required|string',
            'faq_category_id' => 'required|exists:faq_categories,id',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->question);
        $originalSlug = $slug;
        $counter = 1;
        while (Faq::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        Faq::create([
            'question' => $request->question,
            'slug' => $slug,
            'answer' => $request->answer,
            'faq_category_id' => $request->faq_category_id,
        ]);
        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Faq $faq)
    {
        return view('admin.faqs.show', compact('faq'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faq $faq)
    {
        $categories = FaqCategory::all();
        return view('admin.faqs.edit', compact('faq', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Faq $faq)
    {
        $request->validate([
            'question' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'answer' => 'required|string',
            'faq_category_id' => 'required|exists:faq_categories,id',
        ]);

        $slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->question);
        $originalSlug = $slug;
        $counter = 1;
        while (Faq::where('slug', $slug)->where('id', '!=', $faq->id)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $faq->update([
            'question' => $request->question,
            'slug' => $slug,
            'answer' => $request->answer,
            'faq_category_id' => $request->faq_category_id,
        ]);
        
        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $faq = Faq::where('slug', $slug)->firstOrFail();
        $faq->delete();
        return response()->json(['success' => true]);
    }
}
