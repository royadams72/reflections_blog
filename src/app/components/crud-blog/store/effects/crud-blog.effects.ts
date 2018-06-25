// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { BlogsService } from '../../../../services/blogs.service';

import { AppState } from '../../../../store/app-state';
import { Store } from '@ngrx/store';



@Injectable()
export class CrudBlogEffects {
  constructor(private actions$: Actions, private blogService: BlogsService, private store:Store<AppState>) {}

//   @Effect() blogs$: Observable<any> = this.actions$
//       .ofType<GetBlogForFormAction>(GET_BLOG_FOR_FORM)
//     .map(action =>  {
//         console.log(action.type)
//         return new PopulateBlogFormAction(action.payload)
//     });
   
    // new UserThreadsLoadedAction(allUserData)
}
