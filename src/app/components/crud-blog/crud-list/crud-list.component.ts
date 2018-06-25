import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../../services/blogs.service';
import { Blog } from '../../../models/blog';
import 'rxjs/add/operator/mergeMap';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { BLOG_SELECTED_ACTION } from '../store/actions/crud.actions';
import { getBlogs } from '../../../store/selectors/blog.selectors';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})

export class CrudListComponent implements OnInit {
  blogs$: any;

  constructor(private blogsService: BlogsService, private store:Store<AppState>) { 
    this.blogs$ = store.select(getBlogs)
    // store.select(getSelectedBlog)
    // store.subscribe(state=>{
    //   console.log(state.blogs)
    //   state.blogs
    // })
  }

  ngOnInit() {
    // this.blogs = this.blogsService.getBlogs();
  }
  populateForm(id: String, index:number) {
    
    this.store.dispatch({type:BLOG_SELECTED_ACTION, payload:{id:id, index:index}})
    
    // let blogs = this.blogsService.returnBlogs();
    // blogs.map((blog: Blog) => {
    //   blog._id === id ? this.blogsService.populateForm.next({ blog: blog, index: index }) : blog._id = blog._id;

    // })
  }
}
