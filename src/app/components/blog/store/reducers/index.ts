
import * as fromBlogs from './blogs.reducer';
import * as fromBlogsUI from './blogUI.reducer'
import * as fromRoot from '../../../../reducers';


export interface BlogState {
    blogs: fromBlogs.State;
    blogsUI:fromBlogsUI.State
  }
  
  export interface State extends fromRoot.State {
    blogsState: BlogState;

  }
  
  export const reducers = {
    blogs: fromBlogs.reducer,
    blogsUI: fromBlogsUI.reducer
  };

  // export const selectBlogsState = createFeatureSelector<BlogState>('blogsState');