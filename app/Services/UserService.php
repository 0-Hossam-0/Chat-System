<?php

namespace App\Services;

use Auth;
use Laravel\Sanctum\Sanctum;

class UserService
{
    public function getUser($request)
    {
        $token = $request->cookie('auth_token');
        if ($token) {
            $model = Sanctum::$personalAccessTokenModel;
            $accessToken = $model::findToken($token);
            if ($accessToken) {
                $user = $accessToken->tokenable;
                return $user;
            }
        }
    }
}