<?php

namespace App\Http\Controllers;

use App\Mail\VerifyMail;
use App\Models\Users;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Mail;
use Str;

class AuthController extends Controller
{

    public function user(Request $request)
    {
        $token = $request->cookie('auth_token');
        $request->headers->set('Authorization','Bearer ' . $token);
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('auth_token');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }


    public function sendEmail(Request $request)
    {
        if (isset($request->email)) {
            $code = Str::random(6);
            Cache::put('verification_' . $request->email, [
                'code' => $code,
                'last_activity' => now()
            ], now()->addMinutes(10));
            Mail::to($request->email)
                ->send(new VerifyMail($code));
            return response()->json([
                "message" => "Email successfully sent",
                "token" => Cache::get('verification_' . $request->email)
            ], 200);
        }
        return response()->json([
            "message" => "Email is required"
        ], 422);
    }
}