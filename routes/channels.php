<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

// Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
//     \Log::info('User:', ['user' => $user]);
//     \Log::info('UserId:', ['userId' => $id]);
//     return true;
//     // return (int) $user->id === (int) $userId;

// });
Broadcast::channel('Chat.User.{userId}', function ($user, $userId) {
return true;
    // return (string) $user->id === (string) $userId;
});