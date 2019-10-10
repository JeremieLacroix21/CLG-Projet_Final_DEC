<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CommandSender extends Mailable
{
    use Queueable, SerializesModels;

    public $Destinataire;
    public $Fournisseur;
    public $JsonProduit;
    public $Commande;

    public function __construct($Distributeur, $Fournisseur, $Produit, $Commande)
    {
        $this->Destinataire = $Destinataire;
        $this->Fournisseur = $Fournisseur;
        $this->Produit = $Produit;
        $this->Commande = $Commande;
    }

    public function build()
    {
        $address = 'ExpressShop.Recovery@hotmail.com';
        $subject = 'Vous avez reçu une commande';
        $name = 'Express Shop';
        $data=array('Produit'=>$Produit, 'Commande'=>$Commande);
        
        return $this->view('email.SendCommand')
        ->from($address, $name)
        ->cc($address, $name)
        ->bcc($address, $name)
        ->replyTo($address, $name)
        ->subject($subject)
        ->with( $data, [ 'Destinataire' =>  $this->Destinataire['Destinataire'],
        'Fournisseur' =>  $this->Fournisseur['Fournisseur']]);
    }
}
