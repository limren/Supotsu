<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClicksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/logout', [AuthController::class, "logout"]);
    Route::get("/user", function (Request $request) {
        return $request->user();
    });
});

Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);

// API Articles 
Route::get("/articles", [ArticlesController::class, "index"]);
Route::post("/articles", [ArticlesController::class, "add"]);
Route::get("/articles/{id}", [ArticlesController::class, "getById"]);
Route::put("/articles/{id}", [ArticlesController::class, "update"]);
Route::delete("/articles/{id}", [ArticlesController::class, "delete"]);
Route::get("/mostclicked", [ArticlesController::class, "getMostClickedArticles"]);
Route::get("/mostrecent", [ArticlesController::class, "getMostRecentArticles"]);

// API Routing related to calculate how many times an article has been clicked on
Route::get("/clicks", [ClicksController::class, "index"]);
Route::post("/clicks", [ClicksController::class, "add"]);

Route::put("/clicks/{article_id}", [ClicksController::class, "increment"]);
Route::get("/clicks/{article_id}", [ClicksController::class, "getNumberClicksByArticleID"]);