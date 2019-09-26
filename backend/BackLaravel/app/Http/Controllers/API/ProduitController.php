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
        foreach($produit as $produits) 
        {
            $data[$produits->idproduits] = [$produits->nom_produit, $produits->type,$produits->prix, 
            $produits->idfournisseur,$produits->enstock];
        }
        return json_encode($data);
    }

   public function AddProduct(Request $request)
   {
       $input = $request->all();
       $produit = Produit::create($input);
       DB::table('produits')->insert(array(
        'nom_produit' =>  $input['nom'],
        'type' => $input['type'],
        'prix' => $input['prix'],
        'idfournisseur' => $input['idfournisseur'],
        'enstock' => $input['enstock'],
        'GUID' => $input['GUID'],
        'Tags' => $input['Tags'],
       ));
   }
}