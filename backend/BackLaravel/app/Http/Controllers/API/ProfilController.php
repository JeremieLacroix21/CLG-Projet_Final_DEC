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

}
?>