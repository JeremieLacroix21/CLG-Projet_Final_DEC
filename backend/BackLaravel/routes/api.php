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
 Route::get('GetAllUsers', 'API\PassportController@GetAllUsers');
//Route Produit
 Route::get('GetAllProducts','API\ProduitController@GetAllProducts');
 Route::post('SearchProducts','API\ProduitController@SearchProducts');
 Route::post('AddProduct','API\ProduitController@AddProduct');
 Route::post('AddImage', 'API\ProduitController@AddImage');
 //route panier
 Route::get('GetpanierFromId','API\ProduitController@GetpanierFromId');
 Route::post('AddProductToPanier','API\ProduitController@AddProductToPanier');
 Route::post('DeleteProductFromPanier','API\ProduitController@DeleteProductFromPanier');
//Route Profil
 Route::put('/profil','API\ProfilController@Updatepassword');
 Route::post('/profil','API\ProfilController@GetUser');
//Route Middleware
 Route::group(['middleware' => 'auth:api'], function(){
 });
