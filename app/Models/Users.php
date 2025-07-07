<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Str;
class Users extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'first_name',
        'second_name',
        'username',
        'email',
        'phone_number',
        'gender',
        'password',
        'remember_token',
    ];
    protected $table = 'users';

    public $incrementing = false;
    protected $keyType = 'string';
    public function chats()
    {
        return $this->belongsToMany(Chat::class, 'chat_user', 'user_id', 'chat_id')->withTimestamps();
    }
    public function messages()
    {
        return $this->belongsToMany(Message::class, 'message_user')
            ->withPivot('seen')
            ->withTimestamps();
    }

    public function message()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }
    // protected static function boot()
    // {
    //     parent::boot();
    //     static::creating(function ($model) {
    //         if (empty($model->id)) {
    //             $model->id = (string) Str::id();
    //         }
    //     });
    // }
}