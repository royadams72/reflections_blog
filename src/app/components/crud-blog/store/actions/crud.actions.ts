import { Action } from '@ngrx/store';

import { Blog } from '../../../../models/blog';
import { BlogUIState } from '../crud.state';
// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export const BLOG_SELECTED_ACTION = 'BLOG_SELECTED_ACTION';

export const POPULATE_BLOG_FORM_ACTION = 'POPULATE_BLOG_FORM_ACTION';

export const UPDATE_UI_ACTION = 'UPDATE_UI_ACTION';

export class BlogSelectedAction implements Action {

    readonly type = BLOG_SELECTED_ACTION;

    constructor(public payload:BlogUIState) {
       
    }

}
// export class PopulateBlogFormAction implements Action {

//     readonly type = POPULATE_BLOG_FORM_ACTION;

//     constructor(public payload:getBlogFormInfo) {
       
//     }
// }

// export class UpdateUI implements Action {

//     readonly type = UPDATE_UI_ACTION;

//     constructor(public payload:getBlogFormInfo) {
       
//     }
// }
// export class UpdatedBlogsAction implements Action {

//     readonly type = UPDATE_BLOGS_ACTION;

//     constructor(public payload:number) {
       
//     }

// }