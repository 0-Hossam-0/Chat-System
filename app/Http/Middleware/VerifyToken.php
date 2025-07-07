<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class VerifyToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie('auth_token');

        if ($token) {
            $accessToken = PersonalAccessToken::find($token);
            if ($accessToken) {
                $user = $accessToken->tokenable;
                Auth::guard('web')->login($user);
                return $next($request);
            }
        }
        return response()->json([
            'Unauthorized' => 'Access denied'
        ],401);
    }
}
