import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Store } from '../../../node_modules/@ngrx/store';
import * as fromRoot from '../reducers/';
@Injectable()
export class SocketService {
  socket$ = Observable.webSocket( 'ws://localhost:8081');
  socketMessage$:Observable<any>;
  // 'ws://echo.websocket.org/'
  constructor() {
      // this.connectToSocket()
   }

  connectToSocket(){
   this.socket$.subscribe(
      (message:Observable<any>) => {
        this.socketMessage$ = message;
        // console.log(message)
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
  // getMessage():Observable<any>{

  //   return this.socket$.map((data)=>{
  //       console.log(data)
  //       return data;
  //     })
   
   
  // }
  // updateBlog(action){
  //   console.log(action)
  //   // this.socket$.next(JSON.stringify(action))
  //   // this.store.dispatch({type:'BLOG_UPDATED_ACTION', payload:action.payload})
  // }
}
