import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';
import { ErrorService } from '../components/errors/error.service';

@Injectable()

export class IsloggedinGuard {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService,
    private router: Router,
    private errorService: ErrorService) { }

  canActivate() {
    this.isLoggedIn$ = this.authService.loggedIn$
    console.log(this.isLoggedIn$)
    if (this.isLoggedIn$) {
      return true;
    } else {
      this.errorService.handleError({ title: "You are not loggedin", message: "You don't have permission to view this page" });
      return false;
    }
  }
}
