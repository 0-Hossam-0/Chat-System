<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;


Route::post("/check-input", [RegisterController::class, 'checkInputs']);
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [LoginController::class, 'login']);




Route::post('/send-verification', [AuthController::class, 'sendEmail'])->middleware('verify.last_activity');

