<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatSystemController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AuthController;


Route::post("/check-input", [RegisterController::class, 'checkInputs']);
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [LoginController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('user', [ChatSystemController::class, 'getUser']);
    Route::get('/contacts', [ChatSystemController::class, 'getContacts']);
    Route::get('/messages/{id}', [ChatSystemController::class, 'getMessages']);
    Route::post('/message', [ChatController::class, 'message']);
});



Route::post('/send-verification', [AuthController::class, 'sendEmail'])->middleware('verify.last_activity');

// Broadcast::routes(['middleware' => ['auth:sanctum']]);


// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/broadcasting/auth', function () {
//         return Broadcast::auth(request());
//     });
// });
