<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
 });
 Route::post('login', 'API\PassportController@login');
 Route::post('register', 'API\PassportController@register');
 Route::group(['middleware' => 'auth:api'], function(){
 Route::post('get-details', 'API\PassportController@getDetails');
 Route::get('ShowProduct','API\ProduitController@ShowProduct');
 //profil--jérémie
Route::put('/profil','API\ProfilController@Updatepassword');
Route::post('/profil','API\ProfilController@GetUser');
 });

// CATCH ALL ROUTE =============================  
// all routes that are not home or api will be redirected to the frontend 
// this allows angular to route them 
Route::any('{catchall}', function() {
    return View::make('index'); 
  })->where('catchall', '.*');
