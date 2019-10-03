<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Mail\EmailSender;

class PassportController extends Controller
{
   public $successStatus = 200;
   /**
    * login api
    *
    * @return \Illuminate\Http\Response
    */
   public function login(Request $request){
    $user_favorites = DB::table('users')
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
       DB::table('users')->insert(array(
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

   public function RecoverUsername(Request $request)
   {
        $number = 1;
        $User = DB::table('users')->select('*')->where('email', $request['email'])->first();
        if (is_null($User)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
        }
        else{
            $message =  $User->nomutilisateur;
            $data = ['message' => $message];
            Mail::to($User->email)->send(new EmailSender($data, $number));
            return response()->json(['success'=> 'email sent'], $this->successStatus);
        } 
   }

   public function RecoverPassword(Request $request)
   {
        $number = 2;
        $User = DB::table('users')->select('*')->where('nomutilisateur', $request['nomutilisateur'])->first();
        if (is_null($User)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
        }
        else{
            $message =  $User->motdepasse;
            $data = ['message' => $message];
            Mail::to($User->email)->send(new EmailSender($data, $number));
            return response()->json(['success'=> 'email sent'], $this->successStatus);
        } 
   }

   public function GetAllUsers()
   {
        $users = DB::table('users')->get();
        $data = [];
        $i = 0;
        foreach($users as $user) {
            $data[$i] = [
                'iduser'=>$user->iduser,
                'nomutilisateur'=>$user->nomutilisateur,
                'nom'=>$user->nom,
                'prenom'=>$user->prenom,
                'TypeUser'=>$user->TypeUser,
                'confirme'=>$user->confirme,
                'dateinscription'=>$user->dateinscription,
                'email'=>$user->email
            ];
            ++$i;
        }
        return json_encode($data);
    }
}