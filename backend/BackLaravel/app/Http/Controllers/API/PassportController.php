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

   public function RecoverUsername(Request $request)
   {
        $User = DB::table('user')->select('*')->where('email', $request['email'])->first();
        if (is_null($User)) {
            return response()->json(['error'=> 'User doesnt exist'], 401);
        }
        else{
            $subject = "Nom d'utilisateur de votre compte Express shop";
            $message = "
            <html>
            <head>
            <title>Récupération du nom d'utilisateur de votre compte Express shop</title>
            </head>
            <body>
            <p>bonjour vous avez tenter de récupérer votre nom d'utilisateur de votre compte Express Shop</p>
            <p>Voici votre nom d'utilisateur: " . $User->nomutilisateur . "</p>
            <p>Si vous n'avez pas tenter de récupérer votre nom d'utilisateur, veuillez communiquer avec</p>
            <p>notre service d'aide à l'email suivant: <a>admin@example.com</a></p>
            </body>
            </html>
            ";
            $message = wordwrap($message,70);
            $data = ['message' => 'allo'];
            Mail::to($User->email)->send(new EmailSender($data));
            //$headers = "From: charlesbourgeois@live.ca";
            //mail($User->email,$subject,$message,$headers);
            return response()->json(['success'=> 'email sent'], $this->successStatus);
        } 
   }

   public function RecoverPassword(Request $request)
   {
       
   }


}