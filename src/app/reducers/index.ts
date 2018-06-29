import { Blog } from '../models/blog';
import * as fromBlogs from '../core/store/reducers/blog.reducer';
export interface AppState {
  readonly loaded: boolean;
  readonly blogs: {[key:number]:Blog}
}

export const initialState:AppState = {
  loaded: false,
   blogs: {}
}