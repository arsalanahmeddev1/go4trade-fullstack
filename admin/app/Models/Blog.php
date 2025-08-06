<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'summary',
        'meta_title',
        'meta_keywords',
        'meta_description',
        'content',
    ];

    /**
     * Get related blogs for this blog
     */
    public function relatedBlogs()
    {
        return $this->hasMany(RelatedBlog::class, 'blog_id')->orderBy('sort_order');
    }

    /**
     * Get blogs that are related to this blog
     */
    public function relatedTo()
    {
        return $this->hasMany(RelatedBlog::class, 'related_blog_id')->orderBy('sort_order');
    }

    /**
     * Get all related blog posts (both directions)
     */
    public function getAllRelatedBlogs()
    {
        $relatedAsMain = $this->relatedBlogs()->with('relatedBlog')->get()->pluck('relatedBlog');
        $relatedAsRelated = $this->relatedTo()->with('blog')->get()->pluck('blog');
        
        return $relatedAsMain->merge($relatedAsRelated)->unique('id');
    }

    /**
     * Get blogs that can be related (excluding self and already related)
     */
    public function getAvailableRelatedBlogs()
    {
        $excludeIds = $this->relatedBlogs()->pluck('related_blog_id')->toArray();
        $excludeIds[] = $this->id;
        
        return Blog::whereNotIn('id', $excludeIds)->get();
    }

    // protected static function booted()
    // {
    //     static::creating(function ($blog) {
    //         $blog->slug = Str::slug($blog->title);
    //     });

    //     static::updating(function ($blog) {
    //         $blog->slug = Str::slug($blog->title);
    //     });
    // }

    protected static function booted()
{
    static::creating(function ($blog) {
        $blog->slug = self::generateUniqueSlug($blog->slug ?? Str::slug($blog->title));
    });

    static::updating(function ($blog) {
        $blog->slug = self::generateUniqueSlug($blog->slug ?? Str::slug($blog->title), $blog->id);
    });
}

protected static function generateUniqueSlug($baseSlug, $excludeId = null)
{
    $slug = Str::slug($baseSlug);
    $originalSlug = $slug;
    $counter = 1;

    while (self::where('slug', $slug)
        ->when($excludeId, fn($q) => $q->where('id', '!=', $excludeId))
        ->exists()
    ) {
        $slug = $originalSlug . '-' . $counter++;
    }

    return $slug;
}
}
