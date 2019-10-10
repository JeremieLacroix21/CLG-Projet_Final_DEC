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
 Route::get('GetAllSuppliers', 'API\PassportController@GetAllSuppliers');
 Route::post('AddTag', 'API\PassportController@AddTag');
//Route Produit
 Route::get('GetAllProducts','API\ProduitController@GetAllProducts');
 Route::post('SearchProducts','API\ProduitController@SearchProducts');
 Route::post('AddProduct','API\ProduitController@AddProduct');
 Route::post('AddImage', 'API\ProduitController@AddImage');
 Route::post('EnvoieCommande', 'API\ProduitController@EnvoieCommande');
 //route panier
 Route::post('GetpanierFromId','API\ProduitController@GetpanierFromId');
 Route::post('AddProductToPanier','API\ProduitController@AddProductToPanier');
 Route::post('countItemFromid','API\ProduitController@countItemFromid');
 Route::put('DeleteProductFromPanier','API\ProduitController@DeleteProductFromPanier');
 Route::put('UpdateQuantityPanier','API\ProduitController@UpdateQuantityPanier');
//Route Profil
 Route::post('/profil','API\ProfilController@GetUser');
 Route::put('UpdatePassword','API\ProfilController@UpdatePassword');
 Route::put('UpdateUser','API\ProfilController@UpdateUser');
 Route::put('UpdateConfirmRegistration','API\ProfilController@UpdateConfirmRegistration');
 Route::put('DeleteUser','API\ProfilController@DeleteUser');
//Route Middleware
 Route::group(['middleware' => 'auth:api'], function(){
 });
