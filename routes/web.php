<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// <?php 

// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\GoodController;

// Route::get('/api/getGoods', [GoodController::class, 'getAllGoods']);
// Route::get('/api/getGoods/{id}', [GoodController::class, 'getGoodById']);
// Route::post('/api/addGood', [GoodController::class, 'addGood']);
// Route::delete('/api/deleteGood/{id}', [GoodController::class, 'deleteGood']);