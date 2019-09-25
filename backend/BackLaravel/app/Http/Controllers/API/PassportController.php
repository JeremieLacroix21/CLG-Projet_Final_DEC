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
       $credentials = $request->only('name', 'password');
       if(Auth::attempt($credentials)){
           $user = Auth::user();
           $success['token'] =  $user->createToken('MyApp')->accessToken;
           return response()->json(['success' => $success], $this->successStatus);
       }
       else{
           return response()->json(['error'=> $credentials], 401);
       }
   }
   /**
    * Register api
    *
    * @return \Illuminate\Http\Response
    */
   public function register(Request $request)
   {
       $validator = Validator::make($request->all(), [
           'name' => 'required',
           'password' => 'required',
           'c_password' => 'required|same:password',
           'nom' => 'required',
           'prenom' => 'required',
           'TypeUser' => 'required',
           'adresse' => 'required',
           'admin' => 'required',
           'confirme' => 'required',
           'dateinscription' => 'required',
       ]);
       if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 401);            
       }
       $input = $request->all();
       $input['password'] = bcrypt($input['password']);
       $user = User::create($input);
       $success['token'] =  $user->createToken('MyApp')->accessToken;
       $success['name'] =  $user->name;
       DB::table('user')->insert(array(
        'nomutilisateur' =>  $input['name'],
        'motdepasse' => $input['password'],
        'nom' => $input['nom'],
        'prenom' => $input['prenom'],
        'TypeUser' => $input['TypeUser'],
        'adresse' => $input['adresse'],
        'admin' => $input['admin'],
        'confirme' => $input['confirme'],
        'dateinscription' => $input['dateinscription']
       ));
       return response()->json(['success'=>$success], $this->successStatus);
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