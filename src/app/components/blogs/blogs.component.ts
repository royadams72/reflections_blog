import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../../services/blogs.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBlogs } from '../../core/store/selectors/blog.selectors';
import * as fromRoot from '../crud-blog/store/reducers';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs$:Observable<any>;
  constructor(private  blogsService: BlogsService, private store: Store<fromRoot.State>) {
    this.blogs$ = this.store.select(getBlogs);
   }
 
  ngOnInit() {
 
  

    
  }

}
