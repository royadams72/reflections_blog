import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { getBlogs } from '../../store/selectors/blog.selectors';
import { Blog } from '../../models/blog';
import { Observable } from 'rxjs';
import { getSelectedBlog, getBlogAction, getBlogIndex } from './store/selectors/crud.selectors';
import { BLOG_SELECTED_ACTION } from './store/actions/crud.actions';
import { BlogUIState } from './store/reducers/crud-blog.reducer';


@Component({
  selector: 'app-crud-blog',
  templateUrl: './crud-blog.component.html',
  styleUrls: ['./crud-blog.component.css']
})
export class CrudBlogComponent implements OnInit {
  blogs$: Observable<Array<Blog>>;
  selectedBlog$:Observable<Blog>;
  blogAction$:Observable<string>;
  blogIndex$ :Observable<number>
  constructor(private store:Store<AppState>) {
    this.blogs$ = store.select(getBlogs);
    this.selectedBlog$ = store.select(getSelectedBlog);
    this.blogAction$ = store.select(getBlogAction)
    this.blogIndex$ = store.select(getBlogIndex)
  }

  ngOnInit() {

  }
onBlogSelected(eventPayload:BlogUIState){
  this.store.dispatch({type:BLOG_SELECTED_ACTION, payload:eventPayload})

  // console.log(eventPayload)
}
}
