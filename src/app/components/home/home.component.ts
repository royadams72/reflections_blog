import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../../services/blogs.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBlogs } from '../../core/store/selectors/blog.selectors';
import * as fromRoot from '../blog/store/reducers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs$:Observable<any>;
  constructor(private  blogsService: BlogsService, private store: Store<fromRoot.State>) {
    this.blogs$ = this.store.select(getBlogs);
   }
 
  ngOnInit() {
 
  

    
  }

}
