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

    public function __construct($Fournisseur, $Distributeur, $arrayProduit)
    {
        $this->Distributeur = $Distributeur;
        $this->Fournisseur = $Fournisseur;
        $this->arrayProduit = $arrayProduit;
    }

    public function build()
    {
        $address = 'express.shop.company@gmail.com';
        $subject = 'Vous avez reçu une commande';
        $name = 'Express Shop';
        
        return $this->view('email.SendCommand')
        ->from($address, $name)
        ->cc($address, $name)
        ->bcc($address, $name)
        ->replyTo($address, $name)
        ->subject($subject)
        ->with($this->arrayProduit , $this->Fournisseur,  $this->Distributeur);
    }
}
