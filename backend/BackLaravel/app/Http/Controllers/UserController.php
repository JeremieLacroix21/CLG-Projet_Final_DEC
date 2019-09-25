<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Send back all Users as JSON
     *
     * @return Response
     */
    public function index()
    {
        return Response::json(User::get());
    }

    /**
     * Store a newly created User in storage.
     *
     * @return Response
     */
    public function store()
    {
        $date = new DateTime();
        DB::table('user')->insert(array(
            'motdepasse' => 'mdp',
            'nomutilisateur' => 'Testeur',
            'nom' => 'test',
            'prenom' => 'eur',
            'TypeUser' => 'Fournini',
            'adresse' => '1',
            'admin' => '0',
            'confirme' => '0',
            'dateinscription' => $date
        ));
        return Response::json(array('success' => true));
    }

    /**
     * Remove the specified User from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        User::destroy($id);
        return Response::json(array('success' => true));
    }
}
