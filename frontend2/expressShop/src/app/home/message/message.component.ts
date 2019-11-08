import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
import { LoaderService } from 'src/app/services/loader.service';
import { PusherService } from '../../services/Pusher.service';


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
    //Check if user already exist or create it
    this.pusherService.LogUser(this.auth.currUser.nomutilisateur)
  }

  sendMessage(user: string, text: string) {
    this.pusherService.CreateRoom('1'/*idfournisseur*/,
    this.auth.currUser.nomutilisateur, 'Pepsi');
    }
  }
