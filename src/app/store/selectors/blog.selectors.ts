import { AppState } from "../app-state";
import * as _ from  "lodash";
import { Blog } from "../../models/blog";

export const getBlogs = (state: AppState) => {
    const loadedBlogs = _.values<Blog>(state.blogs)
    console.log(state.blogs);
    return loadedBlogs;
}
