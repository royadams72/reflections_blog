// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import { BlogsService } from '../../services/blogs.service';
import { LoadBlogsAction, LOAD_BLOGS_ACTION, PopulateBlogsAction } from '../actions/blog.actions';
import { Blog } from '../../models/blog';
import { Action } from 'rxjs/scheduler/Action';



@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService) {}

  @Effect() blogs$: Observable<any> = this.actions$
      .ofType<LoadBlogsAction>(LOAD_BLOGS_ACTION)

      .switchMap(action => {
          console.log(action)
          return this.blogService.getBlogs()
        })
    // //   .debug("data received via the HTTP request")
    .map(blogs =>  {
        console.log(blogs)
        return new PopulateBlogsAction(blogs)
    });
   
    // new UserThreadsLoadedAction(allUserData)
}
