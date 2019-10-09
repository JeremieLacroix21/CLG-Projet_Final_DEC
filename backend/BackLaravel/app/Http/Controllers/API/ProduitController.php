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
                'idproduits'=>$produit->idproduits,
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
            return json_encode($data);
        }
   }

   public function AddProductToPanier(Request $request)
   {
    //fonctionnel
    $input = $request->all();
    
    //Ajout du produit
    $results =  DB::table('panier')->insert(array(
    'iduser' =>  $input['iduser'],
     'idproduit' =>  $input['idproduit'],
     'quantity' =>  $input['quantity']
    ));
    if (is_null($results)) {
            return response()->json(['error'=> 'product already in cart'], 401);
       } else {
            return response()->json(['success' => 'item added to cart'], 200);
     }
   }

   public function GetpanierFromId(Request $request)
   {
    //TODO
    $data = [];
    $produits = DB::table('panier')
    ->join('produits', 'panier.idproduit','=', 'produits.idproduits')
    ->select('idproduit','nom','prix','imgGUID','quantity')
    ->where('iduser', '=', $request['iduser'])
    ->get();
    $i = 0;
    foreach($produits as $produit)
    {
        $data[$i] = $produit;
        ++$i;
    }
    return json_encode($data);
   }

   public function DeleteProductFromPanier(Request $request)
   {
       $results = DB::table('panier')->where('idproduit', '=', $request['idproduit'])
       ->where('iduser', '=', $request['iduser'])
       ->delete();
       if (is_null($results)) {
        return response()->json(['error'=> 'product doesnt exist'], 401);
       } else {
           return response()->json(['success' => 'item deleted'], 200);
     }
   }

   public function UpdateQuantityPanier(Request $request)
   {
        //fonctionnel
        $results = DB::table('panier')
        ->where([
            ['iduser','=',$request->get('iduser')],
            ['idproduit','=',$request->get('idproduit')]
        ])
        ->update(['quantity' => $request->get('quantity')]);
        if (is_null($results)) {
           return response()->json(['error'=> 'product doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'quantity changed'], 200);
        }
    }


    public function countItemFromid(Request $request)
    {
        $Data = [];
        $Data = DB::table('panier')
        ->where('iduser','=',$request->get('iduser'))
        ->count();
        if (is_null($Data)) {
           return response()->json(['error'=> 'product doesnt exist'], 401);
        } else {
            // return response()->json(['success' => 'cout done'], 200);
            return json_encode($Data);
        }
    }
}
?>