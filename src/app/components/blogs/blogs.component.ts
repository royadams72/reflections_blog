import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../../services/blogs.service';
import { Blog } from '../../models/blog';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app-state';
import { Observable } from 'rxjs';
import { getBlogs } from '../../core/store/selectors/blog.selectors';
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
