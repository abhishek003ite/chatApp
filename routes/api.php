<?php

//Question Complete Route
Route::apiResource('/question', 'QuestionController');

//Category Complete Route
Route::apiResource('/category', 'CategoryController');

//Reply Complete Route
Route::apiResource('/question/{question}/reply', 'ReplyController');

//Like or Dislike Route
Route::post('/{reply}/like', 'LikesController@likeIt');
Route::delete('/{reply}/like', 'LikesController@unLikeIt');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
