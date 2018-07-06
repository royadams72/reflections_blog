
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromBlogs from "../reducers";
import * as _ from  "lodash";
import { Blog } from "../../../../models/blog";


// export const getState = (state: fromBlogs.State) => state;
export const getBlogsState = createFeatureSelector<fromBlogs.BlogState>('blogsState');

export const getSelectedBlog = createSelector(getBlogsState, (state : fromBlogs.BlogState) => {
    // console.log(state)
    if(state.blogsUI.index === undefined){
      return;
    }
    const blogId = state.blogsUI.index;
    const selectedBlog = state.blogs.blogs[blogId];
    return selectedBlog;

})


export const getBlogAction = createSelector(getBlogsState, (state : fromBlogs.BlogState) => {
    if (state.blogsUI.uiState === '') {
        return;
    }
    return state.blogsUI.uiState;
})

export const getBlogIndex = createSelector(getBlogsState, (state : fromBlogs.BlogState) => {
    if (state.blogsUI.index === undefined) {
        return;
    }
    return state.blogsUI.index;
})


export const getBlogs = createSelector(getBlogsState, (state : fromBlogs.BlogState) => {
    if (_.isEmpty(state.blogs.blogs)) {
        return;
    }
    const loadedBlogs = _.values<Blog>(state.blogs.blogs);
    // console.log(state.blogsState.blogs.blogs);
    return loadedBlogs;
})