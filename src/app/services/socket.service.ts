import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class SocketService {
  socket$ = Observable.webSocket( 'ws://localhost:8081');
  // 'ws://echo.websocket.org/'
  constructor() {
      this.connectToSocket()
   }

  connectToSocket(){
    this.socket$.subscribe(
      (message) => console.log('message received: ' + message),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }


}
