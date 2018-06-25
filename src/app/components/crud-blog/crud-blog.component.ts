import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { getBlogs } from '../../store/selectors/blog.selectors';
import { Blog } from '../../models/blog';
import { Observable } from 'rxjs';
import { getSelectedBlog } from './store/selectors/crud.selectors';
import { BLOG_SELECTED_ACTION } from './store/actions/crud.actions';
import { CrudBlogState } from './store/reducers/crud-blog.reducer';


@Component({
  selector: 'app-crud-blog',
  templateUrl: './crud-blog.component.html',
  styleUrls: ['./crud-blog.component.css']
})
export class CrudBlogComponent implements OnInit {
  blogs$: Observable<Array<Blog>>;
  selectedBlog$:Observable<any>
  constructor(private store:Store<AppState>) {
    this.blogs$ = store.select(getBlogs);
    this.selectedBlog$ = store.select(getSelectedBlog);
  }

  ngOnInit() {

  }
onBlogSelected(eventPayload:CrudBlogState){
  this.store.dispatch({type:BLOG_SELECTED_ACTION, payload:eventPayload})

  console.log(eventPayload)
}
}
