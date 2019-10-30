<?php


namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Produit;
use Illuminate\Support\Facades\DB;
use Mail;
use App\Mail\CommandSender;

class ProduitController extends Controller
{
    public function GetAllProducts()
    {
        $produits = DB::table('produits')
        ->join('users', 'users.iduser', '=', 'produits.idFournisseur')
        ->select('produits.*', 'users.nomutilisateur')
        ->get();

        $array = [];
        $data = [];
        $i = 0;
        foreach($produits as $produit)
        {
            $array = DB::select('Call GetTagsbyIdProduit(?)',array($produit->idproduits));
            $data[$i] = [
                'idproduits'=>$produit->idproduits,
                'nom'=>$produit->nom,
                'prix'=>$produit->prix,
                'idFournisseur'=>$produit->idFournisseur,
                'nomFournisseur'=>$produit->nomutilisateur,
                'enStock'=>$produit->enStock,
                'imgGUID'=>$produit->imgGUID,
                'description'=>$produit->description,
                'tags'=>$array,
            ];
            ++$i;
        }
        return json_encode($data);
    }

    public function GetProductsByFournisseur(Request $request)
    {
        $produits = DB::table('produits')
        ->join('users', 'users.iduser', '=', 'produits.idFournisseur')
        ->select('produits.*', 'users.nomutilisateur')
        ->where('idFournisseur', '=', $request['idFournisseur'])
        ->get();

        $array = [];
        $data = [];
        $i = 0;
        foreach($produits as $produit)
        {
            $array = DB::select('Call GetTagsbyIdProduit(?)',array($produit->idproduits));
            $data[$i] = [
                'idproduits'=>$produit->idproduits,
                'nom'=>$produit->nom,
                'prix'=>$produit->prix,
                'idFournisseur'=>$produit->idFournisseur,
                'nomFournisseur'=>$produit->nomutilisateur,
                'enStock'=>$produit->enStock,
                'imgGUID'=>$produit->imgGUID,
                'description'=>$produit->description,
                'tags'=>$array,
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
        $results =  DB::table('panier')
            ->insert(array(
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

    // Input : A string of product ids separated by semicolons
    // Output : An array of all the suppliers that own products in the list
    public function GetFournisseurParCommande(Request $request)
    {
        //Get chacun des produits
        $arrayProduit = [];
        $data = explode(";", $request["idproduits"]);
        $i = 0;
        foreach ($data as $idproduit) {
            if ($idproduit != "") {
                $arrayProduit[$i] = DB::table('produits')
                    ->select('idFournisseur')
                    ->where('idproduits', '=', $idproduit)
                    ->get();
                ++$i;
            }
        }
        //remove les duplicates (wow)
        $Fourni = array_unique($arrayProduit);
        return json_encode($Fourni);
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
            ['iduser', '=', $request->get('iduser')],
            ['idproduit', '=', $request->get('idproduit')]
        ])
        ->update(['quantity' => $request->get('quantity')]);

        if (is_null($results)) {
           return response()->json(['error' => 'product doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'quantity changed'], 200);
        }
    }

    public function countItemFromid(Request $request)
    {
        $Data = DB::table('panier')
            ->where('iduser', '=', $request->get('iduser'))
            ->count();
        
        if (is_null($Data)) {
           return response()->json(['error'=> 'product doesnt exist'], 401);
        } else {
            return json_encode($Data);
        }
    }

    //*****************************COMMANDE****************** */
    public function InsertCommande(Request $request)
    {
        //Une commande par Fournisseur
        $input = $request->all();
        DB::table('commandes')->insert(array(
         'idDistributeur' => $input['idDistributeur'],
         'dateCreation' => $input['dateCreation'],
         'complete' => $input['complete'],
         'idFournisseur' => $input['idFournisseur']
        ));
        $Data = DB::select('Call GetLastInsertedCommande()');
        return json_encode($Data);
    }

    public function InsertCommandeItems(Request $request)
    {   
        $produit = DB::select('Call InsertCommandeItems(?,?,?)', array($request["idCommande"], $request["idProduit"], $request['quantite']));
    }

    public function EnvoieCommande(Request $request)
    {
        $Fournisseur = DB::table('users')
            ->select('*')
            ->where('iduser', '=', $request['idFournisseur'])
            ->first();

        $idcommande = DB::select('Call GetLastInsertedCommandByFournisseur(?)', array($request["idFournisseur"]));

        //Select tout les produits
        $arrayNomPrenom = array($Fournisseur);
        $occupation = array_column($idcommande, 'MAX(idCommande)');
        $matchThese = ['commandes.idFournisseur' => $request['idFournisseur'], 'commandes.idCommande' => $occupation];
        $produits = DB::table('produits')
            ->join('commandeItems', 'produits.idproduits','=', 'commandeItems.idProduit')
            ->join('commandes', 'commandeItems.idCommande','=', 'commandes.idCommande')
            ->select('prix','nom','description', 'quantite','dateCreation')
            ->where($matchThese)
            ->get();

        //Met les produits dans un array
        $i = 0;
        $arrayProduit = array("");
        foreach($produits as $produit) {
            $a = array($i);
            //wtf tbk
            $arrayProduittest = array_combine($a ,array($produit));
            if (array_key_exists($i, $arrayProduittest)) {
                $c[$i] = $arrayProduittest[$i];
            } else {
                $c[$i] = $arrayProduit;
            }
            $arrayProduit = $c;
            ++$i;
        }

        //Select le nom du distruteur
        $Distributeur = DB::table('users')
            ->select('nomutilisateur')
            ->where('iduser', $request['idDistributeur'])
            ->first();

        Mail::to($Fournisseur->email)
            ->send(new CommandSender($arrayNomPrenom, $Distributeur->nomutilisateur, $arrayProduit));
    
        return response()->json(['success'=> 'email sent'], 200);
    }

    public function UpdateProduct(Request $request)
   {
        //fonctionnel
        $input = $request->all();

        $results = DB::table('produits')
        ->where('idproduits', '=', $request->get('idProduit'))
        ->update(['nom' => $request->get('nom')]);

        $results = DB::table('produits')
        ->where('idproduits', '=', $request->get('idProduit'))
        ->update(['prix' => $request->get('prix')]);

        $results = DB::table('produits')
        ->where('idproduits', '=', $request->get('idProduit'))
        ->update(['enStock' => $request->get('enStock')]);

        $results = DB::table('produits')
        ->where('idproduits', '=', $request->get('idProduit'))
        ->update(['description' => $request->get('description')]);        

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

        if (is_null($results)) {
           return response()->json(['error' => 'product doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'product changed'], 200);
        }
    }
}
?>