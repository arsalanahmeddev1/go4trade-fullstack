<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $careers = Career::latest()->get();
        return view('admin.careers.index', compact('careers'));
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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'position' => 'required|string|max:255',
            'message' => 'required|string',
            'resume' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        try {
            $resumePath = $request->file('resume')->store('resumes', 'public');
            
            Career::create([
                'name' => $request->name,
                'email' => $request->email,
                'position' => $request->position,
                'message' => $request->message,
                'resume_path' => $resumePath,
                'status' => 'unread',
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Application submitted successfully!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to submit application. Please try again.'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        // Mark career as read when viewed
        if ($career->status === 'unread') {
            $career->update(['status' => 'read']);
        }
        
        return view('admin.careers.show', compact('career'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        // Delete the resume file
        if ($career->resume_path) {
            Storage::disk('public')->delete($career->resume_path);
        }
        
        $career->delete();
        return response()->json(['message' => 'Career application deleted successfully']);
    }

    /**
     * Mark career as replied.
     */
    public function markAsReplied(Career $career)
    {
        try {
            $career->update(['status' => 'replied']);
            return response()->json([
                'success' => true,
                'message' => 'Career application marked as replied successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update career application status'
            ], 500);
        }
    }

    /**
     * Download resume file.
     */
    public function downloadResume(Career $career)
    {
        if (!$career->resume_path || !Storage::disk('public')->exists($career->resume_path)) {
            return back()->with('error', 'Resume file not found.');
        }

        return response()->download(storage_path('app/public/' . $career->resume_path));
    }
}
