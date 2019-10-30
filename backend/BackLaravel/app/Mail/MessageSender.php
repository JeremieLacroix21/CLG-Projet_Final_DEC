<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MessageSender extends Mailable
{
    use Queueable, SerializesModels;

    public $arrayMessage;

    public function __construct($array)
    {
        $this->arrayMessage = $array;
    }

    public function build()
    {
        $address = 'express.shop.company@gmail.com';
        $subject = 'Vous avez reçu un message';
        $name = $this->arrayMessage[0]['Nom'];
        
        return $this->view('email.EnvoiMessage')
        ->from($address, $name)
        ->cc($address, $name)
        ->bcc($address, $name)
        ->replyTo($address, $name)
        ->subject($subject)
        ->with([$this->arrayMessage]);
    }
}
