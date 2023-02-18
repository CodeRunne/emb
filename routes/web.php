<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::post("/register", [App\Http\Controllers\Auth\RegisterUserController::class, 'store']);
Route::post("/login", [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']);
Route::post("/subscribe", [App\Http\Controllers\SubscribeController::class, 'store']);
Route::get("/posts", [App\Http\Controllers\PostController::class, 'index']);
Route::get("/posts/search/{post}", [App\Http\Controllers\PostController::class, 'search']);

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get("/dashboard", function() {
        return request()->user();
    });
    Route::post("/logout", [App\Http\Controllers\Auth\AuthenticatedSessionController::class, "destroy"]);
    Route::resource("posts", App\Http\Controllers\PostController::class)
        ->only(['store', 'update', 'destroy']);
});


require __DIR__.'/auth.php';
