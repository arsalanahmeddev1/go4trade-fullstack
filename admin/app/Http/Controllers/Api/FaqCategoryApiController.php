<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FaqCategory;
use Illuminate\Http\Request;

class FaqCategoryApiController extends Controller
{
    public function index()
    {
        $categories = FaqCategory::withCount('faq')->latest()->get();
        return response()->json($categories);
    }

    public function show($id)
    {
        $category = FaqCategory::with('faq')->find($id);

        if (!$category) {
            return response()->json(['message' => 'FAQ Category not found'], 404);
        }

        return response()->json($category);
    }
} 