import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const CURRENT_BLOG_ID = '[Layout] Current Blog ID';
export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class CurrentBlogID implements Action {
  readonly type = CURRENT_BLOG_ID;
  constructor(public payload:string){

    console.log(this.payload)
  }
}

export type Actions = OpenSidenav | CloseSidenav | CurrentBlogID;
