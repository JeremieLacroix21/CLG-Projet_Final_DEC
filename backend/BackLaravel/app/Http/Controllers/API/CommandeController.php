<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    public function GetCommandeDistributeur(Request $request)
    {
        $arraycommandes = array("");
        $matchThese = ['commandes.idDistributeur' => $request['idDistributeur']];
        $commandes = DB::table('commandes')
        ->select('*')->where($matchThese)->get();  
        $i = 0;
        $data = [];
        foreach($commandes as $key => $value)
        {
            $Commande = DB::table('commandes')
             ->join('commandeItems', 'commandes.idCommande','=', 'commandeItems.idCommande')
             ->join('produits', 'commandeItems.idproduit','=', 'produits.idproduits')
             ->select('imgGUID','nom','prix','quantite','description')->where('commandes.idCommande', '=', $value->idCommande)->get();
            $Fournisseur = DB::table('users')
            ->select('iduser','nomutilisateur','adresse','email','Telephone')->where('iduser', '=',  $value->idFournisseur)->get();
            $new = (array) $Commande;
            $first_key = key($new);
            $new['TableItem'] = $new[$first_key];
            unset($new[$first_key]);
            $arraycommandes = (array)$value;
            $arraycommandes['nomFournisseur'] = $Fournisseur[0]->nomutilisateur; 
            $arraycommandes['EmailFournisseur'] =  $Fournisseur[0]->email; 
            $arraycommandes['telephone'] =  $Fournisseur[0]->Telephone; 
            $arrayfini = array_merge($arraycommandes,$new);
            $arraycommandes = array_merge($arrayfini , $arraycommandes);
            $data[$i] = $arrayfini;
            $i++;
        }
        return json_encode($data);
    }
    public function GetCommandeFournisseur(Request $request)
    {
        $matchThese = ['commandes.idFournisseur' => $request['idFournisseur'], 'commandes.complete' => $request['Encours']];
        $commandes = DB::table('commandes')
        ->select('*')->where($matchThese)->get();
        return json_encode($commandes);
    }
    public function GetFournisseur(Request $request)
    {
        $Fournisseur = DB::table('users')
        ->select('iduser','nomutilisateur','adresse','email','Telephone')->where('iduser', '=', $request['idFournisseur'])->get();
        return json_encode($Fournisseur);
    }

    public function GetLogs() {
        $request = DB::table('log_activites')
            ->select('username', 'type', 'timestamp', 'data')
            ->get();
        
        return json_encode($request);
    }
}