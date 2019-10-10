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
    public function login(Request $request)
    {
        $user = DB::table('users')
            ->where('nomutilisateur', '=', $request->get('name'))
            ->where('motdepasse', '=', $request->get('password'))
            ->select(
                'iduser',
                'nomutilisateur',
                'nom',
                'prenom',
                'TypeUser',
                'adresse',
                'admin',
                'confirme',
                'dateinscription',
                'email',
                'Téléphone',
                'description',
                'imgGUID'
            )
            ->first();
            
        if (is_null($user)) {
            return response()->json([@"Informations invalides"], 401);
        } else if ($user->confirme == 0) {
            return response()->json([@"Le compte est en attente de confirmation par un administrateur"], 401);
        } else {
            return json_encode($user);
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
        $user_favorites = DB::table('users')
        ->where('nomutilisateur', '=', $input['name'])
        ->first();
        $useremail = DB::table('users')
        ->where('email', '=', $input['email'])
        ->first();
        if(!is_null($user_favorites))
        {
        return response()->json([@"Le nom d'utilisateur est déja utilisé"], 401);
        }
        if(!is_null($useremail))
        {
        return response()->json([@"Le email est déja utilisé"], 401);
        }
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
        'dateinscription' => $input['dateinscription'],
        'Téléphone' => $input['telephone'],
        'imgGUID' => $input['photo'],
        'description' => $input['description']
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
        $users = DB::table('users')
            ->select(
                'iduser',
                'nomutilisateur',
                'nom',
                'prenom',
                'TypeUser',
                'confirme',
                'dateinscription',
                'email'
            )
            ->where('TypeUser', '<>', 'Admin')
            ->get();
        
        $data = [];
        $i = 0;
        foreach($users as $user) {
            $data[$i] = $users;
            ++$i;
        }
        return json_encode($data);
    }

    public function GetAllSuppliers()
    {
        $users = DB::table('fournisseurs')
            ->join('users', 'fournisseurs.idFournisseur', '=', 'users.iduser')
            ->where('TypeUser', '<>', 'Admin')
            ->select(
                'nbEtoiles',
                'profit',
                'iduser',
                'nomutilisateur',
                'nom',
                'prenom',
                'adresse',
                'confirme',
                'dateinscription',
                'email',
                'Téléphone',
                'description',
                'imgGUID'
            )
            ->get();
        
        $data = [];
        $i = 0;
        foreach($users as $user) {
            $data[$i] = $user;
            ++$i;
        }
        return json_encode($data);
    }

    public function AddTag(Request $request)
    {
        $input = $request->all();
        //Ajout du tag
        $data = explode(";",$input["Tags"]);
        foreach ($data as $Tags) {
            if($Tags != "")
            {
                $TagExiste = DB::table('tags_fournisseur')
                ->where('tag', '=', $Tags)
                ->first();
                if (is_null($TagExiste)) {
                    DB::table('tags_fournisseur')->insert(array(
                        'tag' => $Tags
                        ));
            }
        }
        //Ajout du lien tag
        DB::select('Call InsertionLienTagsFournisseur(?)',array($Tags));
        }
        return response()->json(['sucess'=> 'tag insere'], 200);
    }
}