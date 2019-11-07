import { environment } from '../models/environment';
declare const Pusher: any;
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    // replace xxxx's with your Pusher application key
    this.pusher = new Pusher(environment.pusher.key);
    this.pusher = new Pusher("a2dc63d7124dc4e7b0d0", {
      authEndpoint: 'http://localhost:3000/pusher/auth',
    });
    this.messagesChannel = this.pusher.subscribe('private-messages');
  }
  
}
