<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class ChatUser extends Model
{
    protected $table = 'chat_user';

    protected $fillable = [
        'user_id',
        'chat_id',
    ];

}
