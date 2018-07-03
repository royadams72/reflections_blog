
import { Action } from '@ngrx/store';
import { Blog } from '../../../../models/blog';
import { State } from '../../../../reducers';


export const CRUD_SUCCESS_ACTION = 'CRUD_SUCCESS_ACTION';
export const BLOG_SELECTED_ACTION = 'BLOG_SELECTED_ACTION';

export class CrudSucessAction implements Action {

    readonly type = CRUD_SUCCESS_ACTION;

    constructor(public payload:any) {
       
    }
}

export class BlogSelectedAction implements Action {

    readonly type = BLOG_SELECTED_ACTION;

    constructor(public payload:State) {
       
    }

}

export type Actions =  BlogSelectedAction | CrudSucessAction ;