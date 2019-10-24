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
        ->select('iduser','nomutilisateur','nom','prenom','TypeUser','confirme','dateinscription','email','Téléphone','description')
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
                'telephone' => $user->Téléphone,
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
        ->where('iduser','=',$request->get('IdUser'))
        ->update(['Motdepasse' => $request->get('NouveauMotDePasse')])
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
}
?>