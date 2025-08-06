<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BlogApiController;
use App\Http\Controllers\Api\CareerApiController;
use App\Http\Controllers\Api\ContactApiController;
use App\Http\Controllers\Api\FaqApiController;
use App\Http\Controllers\Api\FaqCategoryApiController;
use App\Http\Controllers\Api\NewsletterApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/blogs', [BlogApiController::class, 'index']);
Route::get('/blogs/{slug}', [BlogApiController::class, 'show']);

// FAQ API Routes
Route::get('/faqs', [FaqApiController::class, 'index']);
Route::get('/faqs/{slug}', [FaqApiController::class, 'show']);
Route::get('/faqs/category/{categoryId}', [FaqApiController::class, 'byCategory']);

// FAQ Categories API Routes
Route::get('/faq-categories', [FaqCategoryApiController::class, 'index']);
Route::get('/faq-categories/{slug}', [FaqCategoryApiController::class, 'show']);

// Contact API Routes
Route::post('/contacts', [ContactApiController::class, 'store']);

// Career API Routes
Route::post('/careers', [CareerApiController::class, 'store']);

// Newsletter API Routes
Route::post('/newsletters', [NewsletterApiController::class, 'store']);
