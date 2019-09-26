<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;

class PassportController extends Controller
{
   public $successStatus = 200;
   /**
    * login api
    *
    * @return \Illuminate\Http\Response
    */
   public function login(Request $request){
    $user_favorites = DB::table('user')
    ->where('nomutilisateur', '=', $request->get('name'))
    ->where('motdepasse', '=', $request->get('password'))
    ->first();
    if (is_null($user_favorites)) {
      return response()->json(['error'=> 'User doesnt exist'], 401);
    } else {
        return response()->json(['success' => 'Tu es connecte'], $this->successStatus);
    }
   }
   /**
    * Register api
    *
    * @return \Illuminate\Http\Response
    */
   public function register(Request $request)
   {
       $input = $request->all();
       DB::table('user')->insert(array(
        'nomutilisateur' =>  $input['name'],
        'email' => $input['email'],
        'motdepasse' => $input['password'],
        'nom' => $input['nom'],
        'prenom' => $input['prenom'],
        'TypeUser' => $input['TypeUser'],
        'adresse' => $input['adresse'],
        'admin' => $input['admin'],
        'confirme' => $input['confirme'],
        'dateinscription' => $input['dateinscription']
       ));
       return response()->json(['success'=> 'User Created'], $this->successStatus);
   }
   /**
    * details api
    *
    * @return \Illuminate\Http\Response
    */
   public function getDetails()
   {
       $user = Auth::user();
       return response()->json(['success' => $user], $this->successStatus);
   }
}