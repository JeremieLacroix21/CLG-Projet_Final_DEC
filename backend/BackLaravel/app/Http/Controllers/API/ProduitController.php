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
            $data[$produits->idproduits] = [$produits->nom_produit,$produits->prix, 
            $produits->idfournisseur,$produits->enstock,$produits->GUID,$produits->Tags];
        }
        return json_encode($data);
    }

   public function AddProduct(Request $request)
   {
       $input = $request->all();
       //Ajout du tag
       $data = explode(";",$input["Tags"]);
       foreach ($data as $Tags) {
        $TagExiste = DB::table('tags_produit')
        ->where('Tag', '=', $Tags)
        ->first();
        if (is_null($TagExiste)) {
            DB::table('tags_produit')->insert(array(
                'Tag' => $Tags
               ));
        }
       }
       return response()->json(['success'=> 'Tag inséré'], 200);
       //Ajout du lien_Tag

       //Ajout du produit
       DB::table('produits')->insert(array(
        'nom_produit' =>  $input['nom'],
        'prix' => $input['prix'],
        'idfournisseur' => $input['idfournisseur'],
        'enstock' => $input['enstock'],
        'GUID' => $input['GUID'],
        'Tags' => $input['Tags'],
       ));
   }

   public function AddImage(Request $request)
   {
       $data = $request->file('Image')->getClientOriginalName();
       $destination = base_path() . '/storage/ImageUpload';
        $ImageExiste = DB::table('produits')
        ->where('GUID', '=', $data)
        ->first();
        if (is_null($ImageExiste)) {
            $request->file('Image')->move($destination, $data);
            return json_encode($data);
        }
        else{
           return response()->json(['error'=> 'Nom déja utilisé'], 401);
        }
   }
}