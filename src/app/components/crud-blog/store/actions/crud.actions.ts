import { Action } from '@ngrx/store';
import { Blog } from '../../../../models/blog';
import { BlogUIState } from '../crud.state';
import { BlogPayLoad } from '../../models/models';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export const BLOG_SELECTED_ACTION = 'BLOG_SELECTED_ACTION';

export const POPULATE_BLOG_FORM_ACTION = 'POPULATE_BLOG_FORM_ACTION';

export const BLOG_UPDATED_ACTION = 'BLOG_UPDATED_ACTION';

export const BLOG_DELETED_ACTION = 'BLOG_DELETED_ACTION';

export const BLOG_ADDED_ACTION = 'BLOG_ADDED_ACTION';

export const CRUD_SUCCESS_ACTION = 'CRUD_SUCCESS_ACTION';

export const BLOG_ADDED_TO_DB_ACTION = 'BLOG_ADDED_TO_DB_ACTION';


export class BlogSelectedAction implements Action {

    readonly type = BLOG_SELECTED_ACTION;

    constructor(public payload:BlogUIState) {
       
    }

}

export class BlogUpdatedAction implements Action {

    readonly type = BLOG_UPDATED_ACTION;

    constructor(public payload:BlogPayLoad) {
       
    }

}


export class BlogDeletedAction implements Action {

    readonly type = BLOG_DELETED_ACTION;

    constructor(public payload:BlogPayLoad) {
       
    }

}
export class BlogAddedAction implements Action {

    readonly type = BLOG_ADDED_ACTION;

    constructor(public payload:any) {
       
    }

}
export class CrudSucessAction implements Action {

    readonly type = CRUD_SUCCESS_ACTION;

    constructor(public payload:any) {
       
    }
}

export class BlogAddedToDBAction implements Action {

    readonly type = BLOG_ADDED_TO_DB_ACTION;

    constructor(public payload:any) {
       
    }
}

