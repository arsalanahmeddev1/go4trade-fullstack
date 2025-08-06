<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqApiController extends Controller
{
    public function index()
    {
        $faqs = Faq::with('category')->latest()->get();
        return response()->json($faqs);
    }

    public function show($slug)
    {
        $faq = Faq::with('category')->where('slug', $slug)->first();

        if (!$faq) {
            return response()->json(['message' => 'FAQ not found'], 404);
        }

        return response()->json($faq);
    }

    public function byCategory($categoryId)
    {
        $faqs = Faq::with('category')
            ->where('faq_category_id', $categoryId)
            ->latest()
            ->get();

        return response()->json($faqs);
    }
} 