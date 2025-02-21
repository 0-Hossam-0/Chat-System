<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Str;

class Message extends Model
{
    protected $table = 'messages';

    protected $fillable = [
        'chat_id',
        'receiver_id',
        'sender_id',
        'body',
    ];
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
    public function getChatIDAttribute()
    {
        return $this->attributes['chat_id'];
    }

    public function getSenderIDAttribute()
    {
        return $this->attributes['sender_id'];
    }
    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }

    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    public function users()
    {
        return $this->belongsToMany(Users::class, 'message_user', 'message_id', 'user_id')
            ->withPivot('seen')
            ->withTimestamps();
    }
}
