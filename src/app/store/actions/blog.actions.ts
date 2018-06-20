import { Action } from '@ngrx/store';

import { Blog } from '../../models/blog';
// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export const UPDATE_BLOGS_ACTION = 'UPDATE_BLOGS_ACTION';
export const LOAD_BLOGS_ACTION = 'LOAD_BLOGS_ACTION';
export const POPULATE_BLOGS_ACTION = 'POPULATE_BLOGS_ACTION';


export class LoadBlogsAction implements Action {

    readonly type = LOAD_BLOGS_ACTION;

    constructor(public payload?:Blog[]) {
       
    }

}
export class PopulateBlogsAction implements Action {

    readonly type = POPULATE_BLOGS_ACTION;

    constructor(public payload:Blog[]) {
       
    }
}
export class UpdatedBlogsAction implements Action {

    readonly type = UPDATE_BLOGS_ACTION;

    constructor(public payload:number) {
       
    }

}