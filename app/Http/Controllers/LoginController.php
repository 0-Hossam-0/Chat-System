<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    // public function login(Request $request)
    // {
    //     $userByUsername = Users::where('username', $request->emailUsername)->first();
    //     $userByEmail = Users::where('email', $request->emailUsername)->first();
    //     if ($userByUsername) {

    //         if (Hash::check($request->password, $userByUsername['Password'])) {
    //             $token = Str::random(60);
    //             $userByUsername['remember_token'] = $token;
    //             $userByUsername->save();
    //             $cookie = cookie('auth_token', $token, 43200, '/', null, true, true, false, 'None');
    //             return response()->json(["Success" => "User is exist"], 200)->cookie($cookie);
    //         }
    //         return response()->json(['Error' => "User doesn`t exist"], 422);
    //     } else if ($userByEmail) {E
    //         if (Hash::check($request->password, $userByEmail['Password'])) {
    //             $token = Str::random(60);
    //             $userByEmail['remember_token'] = $token;
    //             $userByEmail->save();
    //             $cookie = cookie('auth_token', $token, 43200, '/', null, true, true, false,'None');
    //             return response()->json(["Success" => "User is exist"], 200)->cookie($cookie);
    //         }
    //         return response()->json(['Error' => "User doesn`t exist"], 422);
    //     }
    //     return response()->json(['Error' => "User doesn`t exist"], 422);
    // }
    public function login(Request $request)
    {
        $userByUsername = Users::where('username', $request->emailUsername)->first();
        $userByEmail = Users::where('email', $request->emailUsername)->first();
        if ($userByEmail && Hash::check($request->password, $userByEmail->password)) {
            $token = $userByEmail->createToken('user-token')->plainTextToken;
            $cookie = cookie('auth_token', $token, 600000, '/', null, false, false, false, 'Lax');
            return response()->json([
                'token' => $token
            ], 200)->withCookie($cookie);
        }
        if ($userByUsername && Hash::check($request->password, $userByUsername->password)) {
            $token = $userByUsername->createToken('user-token')->plainTextToken;
            $cookie = cookie('auth_token', $token, 600000, '/', null, false, false, false, 'Lax');
            return response()->json([
                'token' => $token
            ], 200)->withCookie($cookie);
        }
        return response()->json(['Error' => "User doesn`t exist"], 422);
    }
}
