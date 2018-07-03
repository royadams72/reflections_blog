// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { BlogsService } from '../../../../services/blogs.service';

import * as fromRoot from '../../../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BLOG_UPDATED_ACTION, BlogUpdatedAction, CrudSucessAction, BLOG_DELETED_ACTION, BlogDeletedAction, BlogAddedAction, BLOG_ADDED_ACTION, BlogAddedToDBAction } from '../actions/blog.actions';




@Injectable()
export class CrudBlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService, private store$:Store<fromRoot.State>) {}

  @Effect() updateBlog$: Observable<any> = this.actions$
      .ofType<BlogUpdatedAction>(BLOG_UPDATED_ACTION)
        .mergeMap(action =>  {
            console.log(action)
        return this.blogService.updateBlog(action.payload.blog,action.payload.index)
        })
        .map((action)=>new CrudSucessAction(action))


    @Effect() deleteBlog$: Observable<any> = this.actions$
    .ofType<BlogDeletedAction>(BLOG_DELETED_ACTION)
        .switchMap(action =>  {
            console.log(action)
            return this.blogService.deleteBlog(action.payload.blog,action.payload.index)
        })
        .map((action)=>new CrudSucessAction(action))


  @Effect() addBlog$: Observable<any> = this.actions$
  .ofType<BlogAddedAction>(BLOG_ADDED_ACTION)
    .mergeMap(action =>  {
        console.log(action)
    return this.blogService.addBlog(action.payload.blog)
    .mergeMap((action)=>[new BlogAddedToDBAction(action), new CrudSucessAction(action)])
    })
    
   
}
