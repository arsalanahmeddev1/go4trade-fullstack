<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CareerApiController extends Controller
{
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
}
