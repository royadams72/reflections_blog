
import { createSelector } from "@ngrx/store";
import * as fromCrud from "../reducers";

export const getState = (state: fromCrud.State) => state;

export const getSelectedBlog = createSelector(getState, (state : fromCrud.State) => {
    console.log(state)
    if(state.crudState.crud.index === undefined){
      return;
    }
    const blogId = state.crudState.crud.index;
    const selectedBlog = state.root.blogState.blogs[blogId];
    console.log(state.root.blogState.blogs, blogId)
    return selectedBlog;

})


export const getBlogAction = ((state : any) => {
// console.log(state.crudBlog.crudBlog)
return state.crudState.crud.uiState;
})


export const getBlogIndex = (state : any) => {
    // console.log(state)
    return state.crudState.crud.index;
    }