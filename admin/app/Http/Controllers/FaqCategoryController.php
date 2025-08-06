<?php

namespace App\Http\Controllers;

use App\Models\FaqCategory;
use Illuminate\Http\Request;

class FaqCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = FaqCategory::withCount('faq')->get();
        return view('admin.faq_categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.faq_categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:faq_categories,name',
        ]);

        FaqCategory::create([
            'name' => $request->name,
        ]);

        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(FaqCategory $faqCategory)
    {
        $faqCategory->load('faqs');
        return view('admin.faqs_categories.show', compact('faqCategory'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FaqCategory $faqCategory)
    {
        return view('admin.faq_categories.edit', compact('faqCategory'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FaqCategory $faqCategory)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:faq_categories,name,' . $faqCategory->id,
        ]);

        $faqCategory->update([
            'name' => $request->name,
        ]);

        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FaqCategory $faqCategory)
    {
        $faqCategory->delete();
        return response()->json(['success' => true]);
    }
}
