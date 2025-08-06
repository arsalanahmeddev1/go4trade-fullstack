<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RelatedBlog extends Model
{
    protected $fillable = [
        'blog_id',
        'related_blog_id',
        'sort_order',
    ];

    /**
     * Get the main blog
     */
    public function blog()
    {
        return $this->belongsTo(Blog::class, 'blog_id');
    }

    /**
     * Get the related blog
     */
    public function relatedBlog()
    {
        return $this->belongsTo(Blog::class, 'related_blog_id');
    }
}
