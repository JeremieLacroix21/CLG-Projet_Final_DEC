<?php

use Illuminate\Http\Request;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
 });
 //Route User
 Route::post('login', 'API\PassportController@login');
 Route::post('register', 'API\PassportController@register');
 Route::post('RecoverUsername', 'API\PassportController@RecoverUsername');
 Route::post('RecoverPassword', 'API\PassportController@RecoverPassword');
//Route Produit
 Route::post('ShowProduct','API\ProduitController@ShowProduct');
 Route::post('ShowProductParRecherche','API\ProduitController@ShowProductParRecherche');
 Route::post('AddProduct','API\ProduitController@AddProduct');
 Route::post('AddImage', 'API\ProduitController@AddImage');
 //route panier
 Route::post('Getpanier','API\PanierController@Getpanier');
 Route::post('AddItempanier','API\PanierController@Additempanier');
//Route Profil
 Route::put('/profil','API\ProfilController@Updatepassword');
 Route::post('/profil','API\ProfilController@GetUser');
//Route Middleware
 Route::group(['middleware' => 'auth:api'], function(){
 });
