<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Career;
use App\Models\Faq;
use App\Models\Contact;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $blogs = Blog::all();
        $blogCount = $blogs->count();
        $faqs = Faq::all();
        $faqCount = $faqs->count();
        $contacts = Contact::all();
        $contactCount = $contacts->count();
        $newsletters = Newsletter::all();
        $newsletterCount = $newsletters->count();
        $careers = Career::all();
        $careerCount = $careers->count();
        return view('admin.dashboard', compact('blogs', 'blogCount', 'faqs', 'faqCount', 'contacts', 'contactCount', 'newsletters', 'newsletterCount', 'careers', 'careerCount'));
    }
}
