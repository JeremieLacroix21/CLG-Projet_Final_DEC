import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';
import { PusherService } from '../../services/Pusher.service';
import { User } from 'src/app/models';


interface Message {
  text: string;
  user: string;
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  messages: Array<Message>;
  userName: string = '';
  messageText : string = '';

  constructor(private pusherService: PusherService, private auth : AuthService) {
    this.messages = [];
    
  }

  ngOnInit() {
    var User;
    if(this.auth.D)
    {
      User = 'D' + this.auth.currUser.iduser;
    }
    else{
      User = 'S' + this.auth.currUser.iduser;
    }
    this.pusherService.LogUser(User, this.auth.currUser.nomutilisateur)
  }

  sendMessage(user: string, text: string) {
    this.pusherService.CreateRoom('1'/*idfournisseur*/,
    this.auth.currUser.nomutilisateur, 'Pepsi');
    }
  }
