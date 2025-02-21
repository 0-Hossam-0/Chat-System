<?php

namespace App\Http\Controllers;

// use App\Events\Message;
use App\Models\Chat;
use Auth;
use Illuminate\Http\Request;
use App\Models\Message;
class ChatController extends Controller
{
    // event(new Message($request->input('username'), $request->input('message'), $request->input('userId')));
    // broadcast(new Message($request->get('chat_id'), $request->get('message')))->toOthers();
    public function message(Request $request)
    {
        $chat = Chat::firstOrCreate(
            ['name' => $request->get('chat_name')],
            [
                'created_at' => now(),
                'updated_at' => now()
            ]
        );
        if (isset($chat)) {
            $chat->users()->attach(Auth::id());
            $message = new Message();
            $message->chat_id = $chat->id;
            $message->sender_id = Auth()->id();
            $message->body = $request->message;
            $message->save();
        }
        return "Good";
    }
}
