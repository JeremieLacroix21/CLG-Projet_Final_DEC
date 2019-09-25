<?php


namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Produit;
use Illuminate\Support\Facades\DB;

class ProduitController extends Controller
{
   public function ShowProduct()
   {
        $produit = DB::table('produits')->get();
        $data = [];
        foreach($produit as $produits) { }
        {
            $data[$produits->idproduits] = [$produits->nom_produit, $produits->type,$produits->prix, 
            $produits->idfourniseur,$produits->enstock];
        }
        return json_encode($data);
    }
}