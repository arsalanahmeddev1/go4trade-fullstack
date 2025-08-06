<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\FaqCategory;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Remove the "All Faqs" category if it exists
        FaqCategory::where('name', 'All Faqs')->delete();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Recreate the "All Faqs" category if needed
        FaqCategory::create(['name' => 'All Faqs']);
    }
};
