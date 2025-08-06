<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newsletters = Newsletter::latest()->get();
        return view('admin.newsletters.index', compact('newsletters'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Newsletter $newsletter)
    {
        return view('admin.newsletters.show', compact('newsletter'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Newsletter $newsletter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Newsletter $newsletter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Newsletter $newsletter)
    {
        $newsletter->delete();
        return response()->json(['message' => 'Newsletter subscription deleted successfully']);
    }

    /**
     * Toggle newsletter status.
     */
    public function toggleStatus(Newsletter $newsletter)
    {
        try {
            $newsletter->update([
                'status' => $newsletter->status === 'active' ? 'inactive' : 'active'
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Newsletter status updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update newsletter status'
            ], 500);
        }
    }
}
