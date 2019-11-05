<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;


class ProfilController extends Controller
{
    public $successStatus = 200;

    public function Update(Request $request)
    {
        $results = DB::table('user')->update(['votes' => 1])
        ->where('iduser','=', $request->get('id'));
        if (is_null($results)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'Tu es connecte'], $this->successStatus);
          }
    }

    public function GetUserInformation(Request $request)
    {
        $user_ = DB::table('users')
        ->where('iduser', '=', $request->get('iduser'))
        ->select('iduser','nomutilisateur','nom','prenom','TypeUser','confirme','dateinscription','email','Telephone','description')
        ->get();
        if (is_null($user_)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {

            $data = [];
            foreach($user_ as $user)
            {
            $data = [
                'iduser' => $user->iduser,
                'nomutilisateur' => $user->nomutilisateur,
                'nom'=> $user->nom,
                'prenom'=> $user->prenom,
                'TypeUser'=> $user->prenom,
                'confirme'=> $user->prenom,
                'dateinscription'=> $user->prenom,
                'email' => $user->email,
                'Telephone' => $user->Téléphone,
                'description' => $user->description
            ];
            return json_encode($data);
        }
        return response()->json(['error'=> 'User doesnt exist'], 401);
        }
    }

    public function UpdateConfirmRegistration(Request $request)
    {
        $confirmParam = $request->get('confirme');

         // Check if confirme is valid
        if (!is_null($confirmParam) && ($confirmParam === "true" || $confirmParam === "false")) {
            $confirmParam = $confirmParam === "true" ? 1 : 0;
        } else {
            return response()->json(['error'=> 'confirme must be "true" or "false"'], 400);
        }

        $results = DB::table('users')
            ->where('iduser', '=', $request->get('iduser'))
            ->update(['confirme' => $confirmParam]);

        return response()->json(['success' => ''], $this->successStatus);
    }

    public function DeleteUser(Request $request)
    {
        $user_is_admin = DB::table('users')
            ->where('iduser', '=', $request->get('iduser'))
            ->select('TypeUser')
            ->get()
            ->first()
            ->TypeUser === 'Admin';

        // Check if user is not an admin
        if (!is_null($user_is_admin) && $user_is_admin == 0) {
            DB::table('users')
                ->where('iduser', '=', $request->get('iduser'))
                ->delete();
        }

        return response()->json(['success' => ''], $this->successStatus);
    }
    public function UpdatePassword(Request $request)
    {
        //fonctionnel
        $results = DB::table('users')
        ->where('iduser','=',$request->get('iduser'))
        ->update(['Motdepasse' => $request->get('nouveaumotdepasse')])
        ;
        if (is_null($results)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'Password changed'], $this->successStatus);
          }
    }
    public function UpdateUser(Request $request)
    {
        //fonctionnel
        $results = DB::table('users')
        ->where('iduser','=',$request->get('iduser'))
        ->update(['nomutilisateur' => $request->get('nomutilisateur')]);
        
        $results += DB::table('users')
        ->where('iduser','=',$request->get('iduser'))
        ->update(['email' => $request->get('email')]);

        $results += DB::table('users')
        ->where('iduser','=',$request->get('iduser'))
        ->update(['Telephone' => $request->get('Telephone')]);

        $results += DB::table('users')
        ->where('iduser','=',$request->get('iduser'))
        ->update(['description' => $request->get('description')]);
        if (is_null($results)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'profile updated'], $this->successStatus);
          }
    }



    public function UpdateRating(Request $request)
    {
        if($request->get('rating') <= 5 && $request->get('rating') > 0)
        
        {$results = DB::table('Ratings')
        ->updateOrInsert(
        ['idfournisseur' => $request->get('idfournisseur'), 'iduser' => $request->get('iduser')],
        ['rating' => $request->get('rating')]
        );
        //faire la moyenne 
        $moyenne = DB::table('Ratings')
        ->where('idfournisseur','=',$request->get('idfournisseur'))
        ->avg('rating');

        
        round($moyenne);
        if ($moyenne >= 6)
        {
            $moyenne = 5;
        }
        else if ($moyenne <= 0)
        {
            $moyenne = 1;
        }
        //update le current rating avec la moyenne  
        $results += DB::table('fournisseurs')
        ->where('idfournisseur','=',$request->get('idfournisseur'))
        ->update(['nbEtoiles' => $moyenne]);
        if (is_null($results)) {
            return response()->json(['error'=> 'User or supplier doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'rating updated'], $this->successStatus);
          }
        }
        else
        {
            return response()->json(['error'=> 'value ou of bound'], 401);
        }
    }


    public function AddOrDeleteFavoriteSuppliers(Request $request)
    { 
        $result = DB::Table('fournisseur_fav')
        ->where([
            ['iduser','=',$request->get('iduser')],
            ['idfournisseur','=',$request->get('idfournisseur')]
        ])
        ->first();
        if (is_null($result))
        {
            //si il n'existe pas on l'insere
            $result = DB::Table('fournisseur_fav')
            ->insert(['iduser' => $request->get('iduser'), 'idfournisseur' => $request->get('idfournisseur')]);
            return response()->json(['error'=> 'favorite inserted'], 200);
        }
        else 
        {
            //si il existe on le delete
            $result = DB::Table('fournisseur_fav')
            ->where([
                ['iduser','=',$request->get('iduser')],
                ['idfournisseur','=',$request->get('idfournisseur')]
            ])
            ->delete();
            return response()->json(['error'=> 'favorite deleted'], 200);
        }
    }

    public function GetFavoriteSuppliers(Request $request)
    { 
        $user_ = DB::table('fournisseur_fav')
        ->join('users', 'fournisseur_fav.idfournisseur', '=','users.iduser')
        ->where('fournisseur_fav.iduser', '=', $request->get('iduser'))
        ->select('users.iduser','nomutilisateur','nom','prenom','TypeUser','confirme','dateinscription','email','Telephone','description')
        ->get();
        if (is_null($user_)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
            $data = [];
            $i = 0;
            foreach($user_ as $user)
            {
            $data[$i] = [
                'iduser' => $user->iduser,
                'nomutilisateur' => $user->nomutilisateur,
                'nom'=> $user->nom,
                'prenom'=> $user->prenom,
                'TypeUser'=> $user->prenom,
                'confirme'=> $user->prenom,
                'dateinscription'=> $user->prenom,
                'email' => $user->email,
                'Telephone' => $user->Telephone,
                'description' => $user->description
            ];
            ++$i;
            }
            return json_encode($data);
            }
        }   


}
?>