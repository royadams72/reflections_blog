import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBlogs } from './store/selectors/blog.selectors';
import { Blog } from '../../models/blog';
import { Observable } from 'rxjs';
import { getSelectedBlog, getBlogAction, getBlogIndex } from './store/selectors/blog.selectors';
import * as fromBlogUI from './store/actions/blogUI.actions';
import * as fromRoot from '../../reducers/';


@Component({
  selector: 'app-crud-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class CrudBlogComponent implements OnInit {
  blogs$: Observable<Array<Blog>>;
  selectedBlog$:Observable<Blog>;
  blogAction$:Observable<string>;
  blogIndex$ :Observable<number>
  constructor(private store:Store<fromRoot.State>) {
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
    this.store.dispatch({type: fromBlogUI.BLOG_SELECTED_ACTION, payload: event});
    // console.log({type: BLOG_SELECTED_ACTION, payload: eventPayload});
}
}
