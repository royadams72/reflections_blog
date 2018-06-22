import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../../services/blogs.service';
import { Blog } from '../../models/blog';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { LOAD_BLOGS_ACTION } from '../../store/actions/blog.actions';
import { Observable } from 'rxjs';
import { getBlogs } from '../../store/selectors/blog.selectors';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs$:Observable<any>;
  constructor(private  blogsService: BlogsService, private store: Store<AppState>) {
    this.blogs$ = this.store.select(getBlogs)
  
   }
 
  ngOnInit() {
 
  

    
  }

}
