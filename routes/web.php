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


Route::get('/checkToken', function (Request $request) {
    $userService = new UserService;
    $user = $userService->getUser($request);
    return Auth::guard('web')->login($user);
    
});



