// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

import { BlogsService } from '../../../../services/blogs.service';



import * as fromBlogActions from '../actions/blog.actions';
import * as fromBlogUIActions from '../actions/blogUI.actions';
import { SocketService } from '../../../../services/socket.service';
import { BlogPayLoad } from '../../models/models';




@Injectable()
export class BlogEffects {
    socketData;
  constructor(private actions$: Actions,
              private blogService: BlogsService,
              private socketService:SocketService) {}
  
  @Effect() blogs$: Observable<any> = this.actions$
  .ofType<fromBlogActions.LoadBlogsAction>(fromBlogActions.LOAD_BLOGS_ACTION)
  .switchMap(action => {
    //   console.log(action)
      return this.blogService.getBlogs();
    })
.map(blogs =>  {
    return new fromBlogActions.BlogsLoadedAction(blogs);
});

  @Effect() updateBlog$: Observable<any> = this.actions$
      .ofType<fromBlogActions.BlogUpdatedAction>(fromBlogActions.BLOG_UPDATED_ACTION)
        .mergeMap(action =>  {
            
            // console.log(action.payload['blog'])
            // this.socketService.socket$.next(JSON.stringify(action))
            // this.socketService.updateBlog(action)
        return this.blogService.updateBlog(action.payload.blog,action.payload.index)
        })
        .map((action)=>new fromBlogUIActions.CrudSucessAction(action))
    

    @Effect() deleteBlog$: Observable<any> = this.actions$
    .ofType<fromBlogActions.BlogDeletedAction>(fromBlogActions.BLOG_DELETED_ACTION)
        .switchMap(action =>  {
            console.log(action)
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
    
    @Effect({dispatch:false}) beginUpdate$: Observable<any> = this.actions$
    .ofType(fromBlogActions.BLOG_UPDATE_START_ACTION, fromBlogActions.BLOG_DELETE_START_ACTION)
    .map((action:any)=>{
        console.log(action)
        return action;
    })
    .do((action)=> this.socketService.socket$.next(JSON.stringify(action)))
    // .map((action)=>new fromBlogActions.BlogUpdatedAction(action))

    @Effect() watchSocket$ = this.socketService.socket$
    .map((action:any)=>{
        console.log(action.type)
        return action
    })
    .filter(action=>action.type===fromBlogActions.BLOG_UPDATE_START_ACTION)
    .mergeMap((action)=> {
    let payload = action.payload
     return [new fromBlogActions.BlogUpdatedAction(payload)]})
     
     @Effect() watchSocketForDel$ = this.socketService.socket$
     .map((action:any)=>{
         console.log(action.type)
         return action
     })
     .filter(action=>action.type===fromBlogActions.BLOG_DELETE_START_ACTION)
     .mergeMap((action)=> {
     let payload = action.payload
      return [new fromBlogActions.BlogDeletedAction(payload)]})

      @Effect()  onlyTheRightThings$ = this.watchSocket$
                .merge(
                    this.watchSocketForDel$
                )
}