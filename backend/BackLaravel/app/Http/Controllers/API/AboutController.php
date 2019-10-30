<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mail;
use App\Mail\MessageSender;

class AboutController extends Controller
{
    public function EnvoieMessage(Request $request)
    {
        $array = array(
            'Nom' => $request['Nom'],
            'message' => $request['message'],
            'email' => $request['email']
        );
        $array = array($array);
        Mail::to("express.shop.company@gmail.com")->send(new MessageSender($array));
        return response()->json(['success'=> 'email sent'], 200);
    }
}