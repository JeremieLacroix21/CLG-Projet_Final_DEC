<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CommandSender extends Mailable
{
    use Queueable, SerializesModels;

    public $Distributeur;
    public $Fournisseur;
    public $arrayProduit;
    public $Commande;

    public function __construct($Fournisseur, $Distributeur, $arrayProduit, $Commande)
    {
        $this->Distributeur = $Distributeur;
        $this->Fournisseur = $Fournisseur;
        $this->arrayProduit = $arrayProduit;
        $this->Commande = $Commande;
    }

    public function build()
    {
        $address = 'ExpressShop.Recovery@hotmail.com';
        $subject = 'Vous avez reçu une commande';
        $name = 'Express Shop';
        $data=array('arrayProduit'=>$arrayProduit, 'Commande'=>$Commande);
        $Fournisseur=array('Fournisseur'=>$Fournisseur);
        
        return $this->view('email.SendCommand')
        ->from($address, $name)
        ->cc($address, $name)
        ->bcc($address, $name)
        ->replyTo($address, $name)
        ->subject($subject)
        ->with( $data, $Distributeur, ['Distributeur' =>  $this->Distributeur['Distributeur']]);
    }
}
