<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\Users;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Laravel\Sanctum\PersonalAccessToken;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        $code = $request->code;
        $email = $request->email;
        $cachedCode = Cache::get('verification_' . $email);
        if ($cachedCode && $cachedCode['code'] == $code) {
            Users::create([
                'first_name' => $request->firstName,
                'second_name' => $request->secondName,
                'username' => $request->username,
                'email' => $request->email,
                'phone_number' => $request->phone,
                'gender' => $request->gender,
                'password' => Hash::make($request->password),
            ]);
            return response()->json(["Success" => "Account Created Succufully."], 201);
        }
        return response()->json([
            "message" => "Wrong code or expired",
        ], 404);
    }

    public function checkInputs(Request $request)
    {
        $responseJson = [
            'username' => 'Username is taken',
            'email' => 'Email is already used'
        ];
        if ($request->username) {
            $isUsername = Users::where('Username', $request->username)->exists();
        } else {
            $responseJson['username'] = 'Username is required';
        }
        if ($request->email) {
            $isEmail = Users::where('Email', $request->email)->exists();
        } else {
            $responseJson['email'] = 'Email is required';
        }
        if (isset($isUsername)) {
            if (!$isUsername) {
                $responseJson['username'] = 'Username is not taken';
            }
        }
        if (isset($isEmail)) {
            if (!$isEmail) {
                $responseJson['email'] = 'email is not taken';
            }
        }
        // return response()->json($responseJson, 200);
        if (isset($isUsername) && isset($isEmail)) {
            if (!$isUsername && !$isEmail) {
                return response()->json($responseJson, 200);
            }
        }
        return response()->json($responseJson, 422);
    }
    public function register(Request $request)
    {

        $cookieToken = $request->cookie('auth_token');
        if (isset($cookieToken)) {
            $token = Users::find($cookieToken);
            if (isset($token)) {
                return redirect(route('home'));
            }
        }
        return Inertia::render('RegisterAndLogin');
    }
}
