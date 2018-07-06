import { Action } from "@ngrx/store";

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';

export class LogIn implements Action {
    readonly type = LOGIN;
    constructor(public payload: any) {
      console.log('paload::'+ this.payload)
    }
  }

  export class LogInSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) {}
  }

  export class LogInFailure implements Action {
    readonly type = LOGIN_FAILURE;
    constructor(public payload: any) {}
  }

  export type Actions =
  | LogIn
  | LogInSuccess
  | LogInFailure;