<?php


namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Produit;
use Illuminate\Support\Facades\DB;

class ProduitController extends Controller
{
   public function GetAllProducts()
   {
        $produits = DB::table('produits')->get();
        $data = [];
        $i = 0;
        foreach($produits as $produit) 
        {
            $data[$i] = [
                'idproduits'>$produit->idproduits,
                'nom'=>$produit->nom,
                'prix'=>$produit->prix, 
                'idFournisseur'=>$produit->idFournisseur,
                'enStock'=>$produit->enStock,
                'imgGUID'=>$produit->imgGUID,
                'description'=>$produit->description
            ];
            ++$i;
        }
        return json_encode($data);
    }

    public function SearchProducts(Request $request)
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
            $data[$produits->idproduits] = [$produits->nom,$produits->prix, 
            $produits->idFournisseur,$produits->enStock,$produits->imgGUID,$produits->description];
        }
        return json_encode($data);
    }

   public function AddProduct(Request $request)
   {
       $input = $request->all();
       //Ajout du produit
       DB::table('produits')->insert(array(
        'nom' =>  $input['nom'],
        'prix' => $input['prix'],
        'idFournisseur' => $input['idFournisseur'],
        'enStock' => $input['enStock'],
        'imgGUID' => $input['imgGUID'],
        'description' => $input['description'],
       ));
       //Ajout du tag
       $data = explode(";",$input["Tags"]);
       foreach ($data as $Tags) {
        $TagExiste = DB::table('tags_produit')
        ->where('tag', '=', $Tags)
        ->first();
        if (is_null($TagExiste)) {
            DB::table('tags_produit')->insert(array(
                'tag' => $Tags
               ));
        }
        //Ajout du lien tag
        DB::select('Call InsertionLienTagsProduit(?)',array($Tags));
       }
       return response()->json(['sucess'=> 'produit insere'], 200);
   }

   public function AddImage(Request $request)
   {
       $data = $request->file('Image')->getClientOriginalName();
       $destination = base_path() . '/storage/ImageUpload';
        $ImageExiste = DB::table('produits')
        ->where('imgGUID', '=', $data)
        ->first();
        if (is_null($ImageExiste)) {
            $request->file('Image')->move($destination, $data);
            return json_encode($data);
        }
        else{
           return response()->json(['error'=> 'Nom dimage déja utilisé'], 401);
        }
   }

   public function AddProductToPanier(Request $request)
   {
    $input = $request->all();
    //Ajout du produit
    DB::table('panier')->insert(array(
     'iduser' =>  $input['iduser'],
     'idproduit' =>  $input['idproduit'],
     'quantity' =>  $input['quantity']
    ));
    return response()->json(['sucess'=> 'produit insere'], 200);
   }

   public function GetpanierFromId(Request $request)
   {
    $data = [];
    $produits = DB::table('panier')
    ->join('produits', 'panier.idproduit', '=', 'produits.idproduits')
    ->select('panier.iduser','panier.idproduit', 'produits.nom', 'produits.prix','produits.imgGUID', 'panier.quantity')
    //->where('iduser', '=', $request['iduser'])
    ->get();
    

    $i = 0;
    foreach($produits as $produit)
    {
        //$data[$i] = [$produit->idproduit, $produit->nom, $produit->prix,$produit->imageGUID,$produit->quantity];
        $data[$i] = [$produit->iduser,$produit->idproduit, $produit->nom, $produit->prix,$produit->imgGUID, $produit->quantity];
        ++$i;
    }
    return json_encode($data);
   }

   public function DeleteProductFromPanier(Request $request)
   {
       DB::table('panier')->where('idproduit', '=', $request['idproduit'])
       ->where('iduser', '=', $request['iduser'])
       ->delete();
   }



}
?>