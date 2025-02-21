<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Str;

class Chat extends Model
{

    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'chat';
    protected $fillable = [
        'name',
    ];


    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
    public function users()
    {
        return $this->belongsToMany(Users::class, 'chat_user', 'chat_id', 'user_id')->withTimestamps();
    }
    public function messages()
    {
        return $this->hasMany(Message::class, 'chat_id');
    }

}
