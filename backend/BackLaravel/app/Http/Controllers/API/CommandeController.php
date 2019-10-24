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
        $matchThese = ['commandes.idDistributeur' => $request['idDistributeur'], 'commandes.complete' => $request['Encours']];
        $commandes = DB::table('commandes')
        ->select('*')->where($matchThese)->get();
        return json_encode($commandes);
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
        ->select('iduser','nomutilisateur','adresse','email','Téléphone')->where('iduser', '=', $request['idFournisseur'])->get();
        return json_encode($Fournisseur);
    }
    public function GetItems(Request $request)
    {
        $Fournisseur = DB::table('commandes')
        ->join('commandeItems', 'commandes.idCommande','=', 'commandeItems.idCommande')
        ->join('produits', 'commandeItems.idproduit','=', 'produits.idproduits')
        ->select('imgGUID','nom','prix','quantite','description')->where('commandes.idCommande', '=', $request['idCommande'])->get();
        return json_encode($Fournisseur);
    }
}