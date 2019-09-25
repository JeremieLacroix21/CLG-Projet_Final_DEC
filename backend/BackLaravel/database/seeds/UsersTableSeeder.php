<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
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
    }    

}
