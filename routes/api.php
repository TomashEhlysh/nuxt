<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoodController;

Route::get('/getGoods', [GoodController::class, 'getAllGoods']);
Route::get('/getGoods/{id}', [GoodController::class, 'getGoodById']);
Route::post('/addGood', [GoodController::class, 'addGood']);
Route::delete('/deleteGood/{id}', [GoodController::class, 'deleteGood']);