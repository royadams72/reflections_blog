import { Action } from '@ngrx/store';

import { Blog } from '../../../../models/blog';
// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export const GET_BLOG_FOR_FORM = 'GET_BLOG_FOR_FORM';
// export const LOAD_BLOGS_ACTION = 'LOAD_BLOGS_ACTION';
export const POPULATE_BLOG_FORM_ACTION = 'POPULATE_BLOG_FORM_ACTION';

export const UPDATE_UI_ACTION = 'UPDATE_UI_ACTION';

export interface  getBlogFormInfo {
    id:string;
}

export class GetBlogForFormAction implements Action {

    readonly type = GET_BLOG_FOR_FORM;

    constructor(public payload:getBlogFormInfo) {
       
    }

}
export class PopulateBlogFormAction implements Action {

    readonly type = POPULATE_BLOG_FORM_ACTION;

    constructor(public payload:getBlogFormInfo) {
       
    }
}

export class UpdateUI implements Action {

    readonly type = UPDATE_UI_ACTION;

    constructor(public payload:getBlogFormInfo) {
       
    }
}
// export class UpdatedBlogsAction implements Action {

//     readonly type = UPDATE_BLOGS_ACTION;

//     constructor(public payload:number) {
       
//     }

// }