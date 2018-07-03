
import { createSelector } from "@ngrx/store";
import * as fromBlogs from "../reducers";
import * as _ from  "lodash";
export const getState = (state: fromBlogs.State):fromBlogs.State => state;

export const getSelectedBlog = createSelector(getState, (state : fromBlogs.State) => {
    console.log(state.blogsState.blogsUI.index)
    if(state.blogsState.blogsUI.index === undefined){
      return;
    }
    const blogId = state.blogsState.blogsUI.index;
    const selectedBlog = state.blogsState.blogs.blogs[blogId];
    console.log(state.blogsState.blogs.blogs, blogId)
    return selectedBlog;

})


export const getBlogAction = ((state : any) => {

return state.blogsState.blogsUI.uiState;
})


export const getBlogIndex = (state : any) => {
    if(state.blogsState === undefined){
        return;
      }
    return state.blogsState.blogsUI.index;
    }

    export const getBlogs = createSelector(getState, (state) => {
        if(state.blogsState === undefined){
            return;
          }
        const loadedBlogs = _.values<any>(state.blogsState.blogs.blogs);
        console.log(state.blogsState.blogs.blogs);
        return loadedBlogs;
    })