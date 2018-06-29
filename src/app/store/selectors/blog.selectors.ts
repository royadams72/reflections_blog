import { AppState } from "../app-state";
import * as _ from  "lodash";
import { Blog } from "../../models/blog";
import { createSelector } from "@ngrx/store";


export const getAppState = (state: AppState) => state;

export const getBlogs = createSelector(getAppState, (state) => {
    const loadedBlogs = _.values<Blog>(state.blogs);
    console.log(state.blogs);
    return loadedBlogs;
})
