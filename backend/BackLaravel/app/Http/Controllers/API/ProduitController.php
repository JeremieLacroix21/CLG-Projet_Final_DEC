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
            $produits->idfournisseur,$produits->enstock,$produits->GUID,$produits->Description];
        }
        return json_encode($data);
    }

    public function ShowProductParRecherche(Request $request)
    {
        $data = [];
        if(!is_null($request["Tags"])){
            $produit = DB::select('Call SearchProduct(?,?,?)',array("Tags",$request["Tags"],null));
        }
        else if(!is_null($request["fournisseur"])){
            $produit = DB::select('Call SearchProduct(?,?,?)',array("fournisseur",$request["fournisseur"],null));
        }
        else if(!is_null($request["nomproduit"])){
            $produit = DB::select('Call SearchProduct(?,?,?)',array("nomproduit",$request["nomproduit"],null));
        }
        else if(!is_null($request["PrixMin"]) && !is_null($request["PrixMax"])){
            $produit = DB::select('Call SearchProduct(?,?,?)',array("Prix",$request["PrixMin"],$request["PrixMax"]));
        }
        foreach($produit as $produits) 
        {
            $data[$produits->idproduits] = [$produits->nom_produit,$produits->prix, 
            $produits->idfournisseur,$produits->enstock,$produits->GUID,$produits->Description];
        }
        return json_encode($data);
    }

   public function AddProduct(Request $request)
   {
       $input = $request->all();
       //Ajout du produit
       DB::table('produits')->insert(array(
        'nom_produit' =>  $input['nom_produit'],
        'prix' => $input['prix'],
        'idfournisseur' => $input['idfournisseur'],
        'enstock' => $input['enstock'],
        'GUID' => $input['GUID'],
        'Description' => $input['Description'],
       ));
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
        //Ajout du lien tag
        DB::select('Call InsertionLienTagsProduit(?)',array($Tags));
       }
       return response()->json(['sucess'=> 'produit inséré'], 200);
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
           return response()->json(['error'=> 'Nom dimage déja utilisé'], 401);
        }
   }
}