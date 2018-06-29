import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app-state';
import { getBlogs } from '../../core/store/selectors/blog.selectors';
import { Blog } from '../../models/blog';
import { Observable } from 'rxjs';
import { getSelectedBlog, getBlogAction, getBlogIndex } from './store/selectors/crud.selectors';
import { BLOG_SELECTED_ACTION, BLOG_UPDATED_ACTION } from './store/actions/crud.actions';
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
  onBlogUpdate(event){
    console.log(event)
    this.store.dispatch({type:event.action, payload:event.payload})

  }

onBlogSelected(event) {
    this.store.dispatch({type: BLOG_SELECTED_ACTION, payload: event});
    // console.log({type: BLOG_SELECTED_ACTION, payload: eventPayload});
}
}
