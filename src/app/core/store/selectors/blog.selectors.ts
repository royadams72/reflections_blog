
import * as _ from  "lodash";
import { Blog, BlogsObjs } from "../../../models/blog";
import { createSelector } from "@ngrx/store";
import * as fromRoot from "../../../reducers/"


// export const getAppState = (state: fromRoot.State) => state;
// // getBlogsState
// export const getBlogs = createSelector(fromRoot.getBlogsState, (state) => {
//     const loadedBlogs = _.values<any>(state);
//     console.log(state);
//     return loadedBlogs;
// })
