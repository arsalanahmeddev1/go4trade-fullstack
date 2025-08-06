<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FaqCategory extends Model
{
    protected $fillable = ['name'];

    public function faq() {
        return $this->hasMany(Faq::class);
    }
}
