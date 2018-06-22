import { AppState } from "../app-state";


export const getBlogs = (state: AppState) => {
    // console.log(state);
    return state.blogs;
}
