<?php

use App\Http\Middleware\VerifyLastActivity;
use App\Http\Middleware\VerifyToken;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        channels: __DIR__ . '/../routes/channels.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(['auth_token']);
        $middleware->alias([
            'verify.token' => VerifyToken::class,
            'verify.last_activity' => VerifyLastActivity::class,
            // 'verify_token' => VerifyToken::class

        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
    })->create();
