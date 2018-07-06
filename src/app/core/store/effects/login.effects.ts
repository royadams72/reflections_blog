// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from "@ngrx/effects";
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { LogIn, LOGIN, LogInSuccess, LOGIN_FAILURE, LogInFailure, LOGIN_SUCCESS } from '../actions/login.actions';
import { State } from '../../../reducers';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import * as loginReducer from '../reducers/login.reducers'
@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store$:Store<State>,
              private router: Router) {}

@Effect() login$: Observable<any> = this.actions$
    .pipe(
      ofType<LogIn>(LOGIN),
      mergeMap(action => {
      return this.authService.login(action.payload.email, action.payload.password)
      .pipe(
        map((data)=> {
           //Decode the returned jwt
          let decodedData = jwt_decode(data.token)
          let userState:loginReducer.State = {
            isAuthenticated: true,
            token:data.token,
            name:decodedData.name
          }
         return new LogInSuccess(userState)
        }),
        catchError((error) => {
            return Observable.of(new LogInFailure({ error: error }));
          })
      )
    }),
   
  )
  // .
  

  

  @Effect({dispatch:false}) logInSuccess$: Observable<any> = this.actions$
  .pipe(
    ofType<LogInSuccess>(LOGIN_SUCCESS),
    tap((user) => {
    console.log(user)
      localStorage.setItem('token', user.token);
      localStorage.setItem('name', user.name);
      localStorage.setItem('isAuthenticated', user.isAuthenticated);
      // this.router.navigateByUrl('/');
    })
  )

  // @Effect({ dispatch: false })
  // LogInFailure$: Observable<any> = this.actions$
  // .pipe(
  //   ofType<LogInFailure>(LOGIN_FAILURE)
  // );

   
}
