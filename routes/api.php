<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// REACT
Route::middleware('auth')->group(function() {
    Route::apiResource('/category', 'Api\CategoryController');
    Route::apiResource('/product', 'Api\ProductController');
    Route::apiResource('/tag', 'Api\TagController');
    Route::apiResource('/post', 'Api\PostController');
});
