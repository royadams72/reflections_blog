// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import { BlogsService } from '../../../services/blogs.service';
import { LoadBlogsAction, LOAD_BLOGS_ACTION, BlogsLoadedAction } from '../actions/blog.actions';
import * as _ from  "lodash";

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService) {}

  @Effect() blogs$: Observable<any> = this.actions$
      .ofType<LoadBlogsAction>(LOAD_BLOGS_ACTION)
      .switchMap(action => {
          return this.blogService.getBlogs();
        })
    .map(blogs =>  {
        console.log(blogs)
        _.chain(blogs)
    .keyBy('name')
    .mapValues('input')
    .value();
        return new BlogsLoadedAction(blogs);
    });

}
