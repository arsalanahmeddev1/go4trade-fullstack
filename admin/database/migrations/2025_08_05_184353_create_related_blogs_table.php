<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('related_blogs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('blog_id');
            $table->unsignedBigInteger('related_blog_id');
            $table->integer('sort_order')->default(0);
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('blog_id')->references('id')->on('blogs')->onDelete('cascade');
            $table->foreign('related_blog_id')->references('id')->on('blogs')->onDelete('cascade');

            // Prevent duplicate relationships
            $table->unique(['blog_id', 'related_blog_id'], 'unique_blog_relationship');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('related_blogs');
    }
};
