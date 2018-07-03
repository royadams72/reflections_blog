
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { BlogsService } from '../../../../services/blogs.service';


import { Observable } from 'rxjs';

import * as fromBlogUIActions from '../actions/blogUI.actions';


@Injectable()
export class BlogUIEffects {
    constructor(private actions$: Actions, private blogService: BlogsService) {}
  
   
  
  }