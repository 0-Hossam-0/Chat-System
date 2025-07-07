<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use App\Models\Users;
use Auth;
use Illuminate\Http\Request;
use Str;
class ChatSystemController extends Controller
{
    public function getContacts()
    {
        $userId = Auth::id();

        $userChats = Users::where('id', $userId)
            ->with([
                'chats' => function ($query) {
                    $query->select('id', 'name');
                },
                'chats.messages' => function ($query) {
                    $query->select('chat_id', 'body', 'sender_id', 'created_at')
                        ->orderBy('created_at', 'desc')
                        ->limit(1);
                }
            ])
            ->select('id', 'username', 'first_name', 'second_name', 'email')
            ->get();

        $userChats->transform(function ($user) {
            $user->firstName = $user->first_name;
            $user->secondName = $user->second_name;
            unset($user->first_name);
            unset($user->second_name);
            $user->chats->transform(function ($chat) {
                $chat->lastMessage = optional($chat->messages->first())->body;
                $chat->senderID = optional($chat->messages->first())->sender_id;
                $chat->createdAt = optional($chat->messages->first())->created_at;
                unset($chat->messages);
                unset($chat->pivot);
                return $chat;
            });
            return $user;
        });

        return response()->json($userChats->first());


    }
    public function getMessages(string $chatID)
    {
        $messages = Message::with(['chat:id,name', 'users'])->where('chat_id', $chatID)->get();

        $messages->transform(function ($message) {
            $message->senderID = $message->sender_id;
            $message->chatID = $message->chat_id;
            unset($message->sender_id);
            unset($message->chat_id);
            return $message;
        });
        return ($messages);
    }
    public function getUser(Request $request)
    {
        // return "here";
        $user = Users::where('username', $request->get('username'))->first();
        $uuid = Str::uuid();
        if (isset($user)) {
            return response()->json([
                'username' => $user->username,
                'id' => $uuid,
            ], 200);
        }
        return response('User not found!', 422);
    }
}