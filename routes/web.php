<?php

use App\Http\Controllers\RegisterController;
use App\Services\UserService;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::middleware(['verify.token'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home');

    })->name('home');
});

Route::get('/register', [RegisterController::class, 'register'])->name('login');
Route::post('/broadcaster/auth', function (Request $request) {
    if (!Auth::guard('sanctum')->check()) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    return Broadcast::auth($request);
})->middleware(['auth:sanctum']);



Route::get('/checkToken', function (Request $request) {
    $userService = new UserService;
    $user = $userService->getUser($request);
    Auth::guard('web')->login($user);
    return "Done";
});
Route::get('/test', function (Request $request) {
    return Auth::check();

});
