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
        ->where('iduser','=',$request->get('id'));
        if (is_null($results)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'Tu es connecte'], $this->successStatus);
          }
    }

    public function GetUser(Request $request)
    {
        $user_ = DB::table('user')
        ->where('iduser', '=', $request->get('id'));
        if (is_null($user_)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
            return response()->json(['success' => 'Tu es connecte'], $this->successStatus);
            return Response::json([
                'username' => $user_->addSelect('Nom')->get(),
                'email' => $user_->addSelect('Prenom')->get(),
                'logo' => $user_->addSelect('Prenom')->get(),
                'description' => $user_->addSelect('Prenom')->get(),
                //'tags' => $user_->addSelect('Prenom')->get(),
                //'phone' => $user_->addSelect('Prenom')->get()
            ]);
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
    public function UpdateEmail(Request $request)
    {
        //fonctionnel
        $results = DB::table('users')
        ->where('iduser','=',$request->get('IdUser'))
        ->update(['Email' => $request->get('NouveauEmail')]);
        if (is_null($results)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
          } else {
              return response()->json(['success' => 'Email changed'], $this->successStatus);
          }
    }

    
}
?>