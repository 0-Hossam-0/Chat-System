<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class VerifyLastActivity
{
    protected $cooldownPeriod = 50;

    public function handle(Request $request, Closure $next)
    {
        $email = $request->input('email');
        if (!$email) {
            return response()->json([
                'success' => false,
                'message' => 'Email is required.',
            ], 422);
        }
        $cacheKey = 'verification_' . $email;
        $userData = Cache::get($cacheKey);
        if ($userData && isset($userData['last_activity'])) {
            $elapsedTime = now()->diffInSeconds($userData['last_activity']);
            if ($elapsedTime + $this->cooldownPeriod > 0) {
                return response()->json([
                    'success' => false,
                    "message" => 'Too Many Requests'
                ], 429);
            }
        }
        return $next($request);
    }
}