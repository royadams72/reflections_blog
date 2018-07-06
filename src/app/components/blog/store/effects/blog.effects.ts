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

import * as fromBlogActions from '../actions/blog.actions';
import * as fromBlogUIActions from '../actions/blogUI.actions';




@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService, private store$:Store<fromRoot.State>) {}

  @Effect() blogs$: Observable<any> = this.actions$
  .ofType<fromBlogActions.LoadBlogsAction>(fromBlogActions.LOAD_BLOGS_ACTION)
  .switchMap(action => {
    //   console.log(action)
      return this.blogService.getBlogs();
    })
.map(blogs =>  {
    // console.log(blogs)
//       _.chain(blogs)
//   .keyBy('name')
//   .mapValues('input')
//   .value();
    return new fromBlogActions.BlogsLoadedAction(blogs);
});

  @Effect() updateBlog$: Observable<any> = this.actions$
      .ofType<fromBlogActions.BlogUpdatedAction>(fromBlogActions.BLOG_UPDATED_ACTION)
        .mergeMap(action =>  {
            // console.log(action)
        return this.blogService.updateBlog(action.payload.blog,action.payload.index)
        })
        .map((action)=>new fromBlogUIActions.CrudSucessAction(action))


    @Effect() deleteBlog$: Observable<any> = this.actions$
    .ofType<fromBlogActions.BlogDeletedAction>(fromBlogActions.BLOG_DELETED_ACTION)
        .switchMap(action =>  {
            // console.log(action)
            return this.blogService.deleteBlog(action.payload.blog,action.payload.index)
        })
        .map((action)=>new fromBlogUIActions.CrudSucessAction(action))


  @Effect() addBlog$: Observable<any> = this.actions$
  .ofType<fromBlogActions.BlogAddedAction>(fromBlogActions.BLOG_ADDED_ACTION)
    .mergeMap(action =>  {
        // console.log(action)
    return this.blogService.addBlog(action.payload.blog)
    .mergeMap((action)=>[new fromBlogActions.BlogAddedToDBAction(action), new fromBlogUIActions.CrudSucessAction(action)])
    })
    
   
}
