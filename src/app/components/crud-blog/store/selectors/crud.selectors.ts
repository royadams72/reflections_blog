
import { createSelector } from "@ngrx/store";
import { Blog } from "../../../../models/blog";


export const getState = (state: any) => state;

export const getSelectedBlog = createSelector(getState, (state : any):Blog => {
    if(state.crudBlog.crudBlog.blogUIState.index === undefined){
      return;
    }
    const blogId = state.crudBlog.crudBlog.blogUIState.index;
    const newState = Object.assign({}, state);
    const selectedBlog = newState.blogs[blogId]
    return selectedBlog;

})


export const getBlogAction = ((state : any) => {
// console.log(state.crudBlog.crudBlog.blogUIState)
return state.crudBlog.crudBlog.blogUIState.uiState;
})


export const getBlogIndex = (state : any) => {
    // console.log(state)
    return state.crudBlog.crudBlog.blogUIState.index;
    }