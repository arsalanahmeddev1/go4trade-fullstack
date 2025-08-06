<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Faq extends Model
{
    protected $fillable = [
        'question',
        'slug',
        'answer',
        'faq_category_id',
    ];


    protected static function booted()
    {
        static::creating(function ($faq) {
            if (empty($faq->slug)) {
                $faq->slug = Str::slug($faq->question);
            }
        });

        static::updating(function ($faq) {
            if (empty($faq->slug)) {
                $faq->slug = Str::slug($faq->question);
            }
        });
    }

    public function category() {
        return $this->belongsTo(FaqCategory::class, 'faq_category_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
        
}
