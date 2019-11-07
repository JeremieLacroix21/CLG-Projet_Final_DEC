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

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }

  sendMessage(user: string, text: string) {
    const message: Message = {
       user: user,
       text: text,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }

}