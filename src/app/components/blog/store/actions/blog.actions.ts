import { Action } from '@ngrx/store';

import { BlogPayLoad } from '../../models/models';
import { Blog } from '../../../../models/blog';



export const LOAD_BLOGS_ACTION = 'LOAD_BLOGS_ACTION';
export const BLOGS_LOADED_ACTION = 'BLOGS_LOADED_ACTION';

export const POPULATE_BLOG_FORM_ACTION = 'POPULATE_BLOG_FORM_ACTION';
export const BLOG_UPDATE_START_ACTION = 'BLOG_UPDATE_START_ACTION';
export const BLOG_DELETE_START_ACTION = 'BLOG_DELETE_START_ACTION';

export const BLOG_UPDATED_ACTION = 'BLOG_UPDATED_ACTION';
export const BLOG_DELETED_ACTION = 'BLOG_DELETED_ACTION';
export const BLOG_ADDED_ACTION = 'BLOG_ADDED_ACTION';

export const BLOG_ADDED_TO_DB_ACTION = 'BLOG_ADDED_TO_DB_ACTION';


export class LoadBlogsAction implements Action {

    readonly type = LOAD_BLOGS_ACTION;

    constructor(public payload?:Blog[]) {
       
    }

}
export class BlogsLoadedAction implements Action {

    readonly type = BLOGS_LOADED_ACTION;

    constructor(public payload:Blog[]) {
       
    }
}

export class BlogUpdatedAction implements Action {

    readonly type = BLOG_UPDATED_ACTION;

    constructor(public payload:any) {
       
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


export class BlogAddedToDBAction implements Action {

    readonly type = BLOG_ADDED_TO_DB_ACTION;

    constructor(public payload:any) {
       
    }
}
export class BlogUpdateStartAction implements Action {

    readonly type = BLOG_UPDATE_START_ACTION;

    constructor(public payload:any) {
       
    }

}

export class BlogDeleteStartAction implements Action {

    readonly type = BLOG_DELETE_START_ACTION;

    constructor(public payload:any) {
       
    }

}
export type Actions = LoadBlogsAction | BlogsLoadedAction |
                      BlogUpdatedAction| BlogDeletedAction |
                      BlogAddedAction | BlogAddedToDBAction |
                      BlogUpdateStartAction | BlogDeleteStartAction;