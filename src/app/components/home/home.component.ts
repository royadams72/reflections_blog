import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../../services/blogs.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBlogs } from '../blog/store/selectors/blog.selectors';

import { CURRENT_BLOG_ID, CLOSE_SIDENAV, OPEN_SIDENAV, CurrentBlogID } from '../../core/store/actions/layout.actions';
import { State } from '../../reducers';
import { Root } from '../../reducers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogs$:Observable<any>;
  constructor(private store: Store<State>) {
    this.blogs$ = this.store.select(getBlogs);
    console.log(this.store)
   }
 

  onBlogSelected(id){
    this.store.dispatch(new CurrentBlogID(id))
    
  }
}
