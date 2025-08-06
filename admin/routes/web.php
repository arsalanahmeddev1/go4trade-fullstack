<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaqCategoryController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RelatedBlogController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth; 
// pUyev5295Uw5
Route::get('/', function () {
    return Auth::check()
        ? redirect()->route('admin.dashboard')
        : redirect()->route('login');
});

Route::prefix('admin')->middleware(['auth', 'is_admin'])->name('admin.')->group(function () {
   Route::get('/',[ DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/blogs', BlogController::class)->parameters([
        'blogs' => 'blog:slug'
    ]);

    // Related Blogs Routes
    Route::get('/blogs/{slug}/related', [RelatedBlogController::class, 'index'])->name('blogs.related.index');
    Route::post('/blogs/{slug}/related', [RelatedBlogController::class, 'store'])->name('blogs.related.store');
    Route::put('/blogs/{slug}/related/order', [RelatedBlogController::class, 'updateOrder'])->name('blogs.related.order');
    Route::delete('/blogs/{slug}/related/{id}', [RelatedBlogController::class, 'destroy'])->name('blogs.related.destroy');
    Route::get('/blogs/{slug}/related/available', [RelatedBlogController::class, 'getAvailableBlogs'])->name('blogs.related.available');

    Route::resource('/faqs', FaqController::class)->parameters([
        'faqs' => 'faq:slug'
    ]);

    Route::resource('/faq-categories', FaqCategoryController::class);

    Route::resource('/contacts', ContactController::class);
    Route::post('/contacts/{contact}/mark-replied', [ContactController::class, 'markAsReplied'])->name('contacts.mark-replied');

    Route::resource('/careers', CareerController::class);
    Route::post('/careers/{career}/mark-replied', [CareerController::class, 'markAsReplied'])->name('careers.mark-replied');
    Route::get('/careers/{career}/download-resume', [CareerController::class, 'downloadResume'])->name('careers.download-resume');

    Route::resource('/newsletters', NewsletterController::class);
    Route::post('/newsletters/{newsletter}/toggle-status', [NewsletterController::class, 'toggleStatus'])->name('newsletters.toggle-status');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::prefix('admin')->name('admin.')->group(function () {
    

});

require __DIR__.'/auth.php';
