import { environment } from '../models/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { Observable } from 'rxjs';


export class PusherService {
  chatManager: any;
  CurrentUser : any; 
  CurrentRoom : any;

  constructor() {
     
  }

  LogUser(idUser) {
    //Check if user exist
     this.chatManager = new ChatManager({
      instanceLocator: 'v1:us1:d7d0c9d7-f015-46e9-8b2b-a76f076a0fac',
      userId: 'D33', //idUser
      tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d7d0c9d7-f015-46e9-8b2b-a76f076a0fac/token' })
    })
    //Connection au user
    this.chatManager.connect().then(currentUser => {
      this.CurrentUser = currentUser;
      console.log('Connection réussi', currentUser);
      currentUser.enablePushNotifications()
      .then(() => {
        console.log('Push Notifications enabled');
      })
      .catch(error => {
        console.error("Push Notifications error:", error);
      });
    })
    .catch(err => {
      console.log('Error on connection', err);
     })
  }

  CreateRoom(idFournisseur,NomUser,NomFournisseur)
  {
    this.CurrentUser.createRoom({
        id: '#general',
        name: 'Conversation ' + NomUser +'-' + NomFournisseur,
        private: true,
        addUserIds: [this.chatManager.userId, 'S'+idFournisseur],
        customData: { foo: 42 },
      }).then(room => {
        this.CurrentRoom = room;
        console.log(`Created room called ${room.name}`)
      })
      .catch(err => {
        console.log(`Error creating room ${err}`)
      });
  }

  AddUserToRoom(UserID)
  {
    this.CurrentUser.addUserToRoom({
      userId: UserID,
      roomId: this.CurrentRoom.id
    })
      .then(() => {
        console.log('Added' + this.CurrentUser + 'to' + this.CurrentRoom.name)
      })
      .catch(err => {
        console.log(`Error adding keith to room 123: ${err}`)
      })
  }

  RemoveUserFromRoom(UserID)
  {
    this.CurrentUser.removeUserFromRoom({
      userId: UserID,
      roomId: this.CurrentRoom.id
    })
      .then(() => {
        console.log('Removed' + UserID +'from' + this.CurrentRoom.name)
      })
      .catch(err => {
        console.log(`Error removing leah from room 123: ${err}`)
      })
  }

  FetchOldMessage()
  {
    this.CurrentUser.fetchMultipartMessages({
      roomId: this.CurrentRoom.id,
      initialId: 42,
      direction: 'older',
      limit: 60,
    })
      .then(messages => {
        console.log(messages);
      })
      .catch(err => {
        console.log(`Error fetching messages: ${err}`)
      })
  }

  GetJoinableRoom(){
    this.CurrentUser.getJoinableRooms()
  .then(rooms => {
    // do something with the rooms
  })
  .catch(err => {
    console.log(`Error getting joinable rooms: ${err}`)
  })
  }

  JoinRoom(RoomId){
    this.CurrentUser.joinRoom({ roomId: RoomId })
    .then(room => {
      console.log(`Joined room with ID: ${room.id}`)
    })
    .catch(err => {
      console.log(`Error joining room ${RoomId}: ${err}`)
    })
  }

  LeaveRoom(RoomId){
    this.CurrentUser.leaveRoom({ roomId: RoomId })
  .then(room => {
    console.log(`Left room with ID: ${room.id}`)
  })
  .catch(err => {
    console.log(`Error leaving room ${RoomId}: ${err}`)
  })
  }

  UpdateRoomPrivacy(RoomId, Privcay){
    this.CurrentUser.updateRoom({
      roomId: RoomId,
      private: Privcay,
    })
      .then(() => {
        console.log(`Updated room with ID: ${RoomId}`)
      })
      .catch(err => {
        console.log(`Error updated room ${RoomId}: ${err}`)
      })
  }

  DeleteRoom(RoomId){
    this.CurrentUser.deleteRoom({ roomId: RoomId })
  .then(() => {
    console.log(`Deleted room with ID: ${RoomId}`)
  })
  .catch(err => {
    console.log(`Error deleted room ${RoomId}: ${err}`)
  })
  }

  SubscribeToRoom(RoomId)
  {
    this.CurrentUser.subscribeToRoomMultipart({
      roomId: RoomId,
      hooks: {
        onMessage: message => {
          console.log("received message", message) 
        },
        onUserStartedTyping: user => {
          console.log(`User ${user.name} started typing`)
        },
        onUserStoppedTyping: user => {
          console.log(`User ${user.name} stopped typing`)
        }
      },
      messageLimit: 10
    })
  }

  UnSubscribeToRoom(RoomId)
  {
    this.CurrentUser.roomSubscriptions[RoomId].cancel()
  }

  SendMessage(RoomId,Message)
  {
    this.CurrentUser.sendSimpleMessage({
      roomId: RoomId,
      text: Message,
    })
    .then(messageId => {
      console.log(`Added message to ${this.CurrentRoom.name}`)
    })
    .catch(err => {
      console.log(`Error adding message to ${this.CurrentRoom.name}: ${err}`)
    })
  }

  TypingIndicator(RoomId)
  {
        this.CurrentUser.isTypingIn({ roomId: RoomId })
      .then(() => {
        console.log('Success!')
      })
      .catch(err => {
        console.log(`Error sending typing indicator: ${err}`)
      })
  }

  UsersOnline(){
    this.chatManager.connect({
      onPresenceChanged: (state, user) => {
        console.log(`User ${user.name} is ${state.current}`)
      }
    })
  }

  onLogOut() {
    this.chatManager.disablePushNotifications()
      .then(() => {
        console.log('Push Notifications disabled');
      })
      .catch(error => {
        console.log('Push Notifications error:', error);
      })
  }
  
}
