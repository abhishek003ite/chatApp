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
