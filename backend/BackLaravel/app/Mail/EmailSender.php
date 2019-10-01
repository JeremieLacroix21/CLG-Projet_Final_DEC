<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailSender extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $number;

    public function __construct($data, $number)
    {
        $this->data = $data;
        $this->number = $number;
    }

    public function build()
    {
        $address = 'ExpressShop.Recovery@hotmail.com';
        $subject = 'Express Shop recovery system';
        $name = 'Express Shop';
        
        if($this->number == 1)
        {
            return $this->view('email.RecoverUsername')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with([ 'messages' =>  $this->data['message'] ]);
        }
        else if($this->number == 2)
        {
            return $this->view('email.RecoverPassword')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with([ 'messages' =>  $this->data['message'] ]);
        }
        else{
            return $this->view('email.RecoverPassword')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with([ 'messages' =>  $this->data['message'] ]);
        }
    }
}
