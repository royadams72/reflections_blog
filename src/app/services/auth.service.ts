import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as jwt_decode from 'jwt-decode';

import { AlertService } from '../components/alert/alert.service';
import { ENV } from '../app.config';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH_CONFIG } from '../config-files/auth0-variables';
// import Auth0Lock from 'auth0-lock'; // the fix
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private blogsURL: string = ENV.BASE_API;
  private adminId: string;
  private username: string;
  private userState: any;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private http: HttpClient,
    private router: Router,
    private alertService: AlertService) {

          // if (this.authenticated) {
          //   this.setLoggedIn(true);
          // }

  }

  // setLoggedIn(value: boolean) {
  //   this.loggedIn$.next(value);
  //   this.loggedIn = value;
  // }
  
  login(email, password): Observable<any> {
    console.log(email,password)
    let params = {email:email, password:password}
    return this.http.post<any>(this.blogsURL + 'login', params)
      .map((res: any) => {
        //  let decodedData = jwt_decode(res)
        console.log(`${res} response from server`)
        return res;
      })//map automatic
  }

 


  private setSession(authResult, profile) {
    // Save session data and update login status subject
    localStorage.setItem('token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    // this.setLoggedIn(true);
  }

  logout() {
    // Remove tokens and profile and update login status subject
    // localStorage.removeItem('token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('profile');
    // this.router.navigate(['/']);
    // this.setLoggedIn(false);
  }

  // get authenticated() {
  //   // Check if there's an unexpired access token
  //   return tokenNotExpired('token');
  // }

}
