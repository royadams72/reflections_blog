import {Action, Store} from "@ngrx/store";
import { BLOG_SELECTED_ACTION } from "../actions/crud.actions";

export interface BlogUIState{
    id:string;
    index:number
    uiState:string
}
export const BLOG_UI_INITIAL_STATE:BlogUIState = {
    id:'',
    index:undefined,
    uiState:'CREATING'
}

export interface CrudBlogState {
    blogUIState:BlogUIState,
    crudState:any
}



export const CRUD_BLOG_INITIAL_STATE: CrudBlogState = {
    blogUIState:BLOG_UI_INITIAL_STATE,
    crudState:undefined
}


export function crudBlog(state:CrudBlogState = CRUD_BLOG_INITIAL_STATE, action:Action) {
    switch (action.type)  {
        
        case BLOG_SELECTED_ACTION:

        return  handleBlogSelectedAction(state, action); 
    default:
        return state;
    }
    
}

function handleBlogSelectedAction(state, action) {
    // console.log(state.blogUIState)

    let newState = Object.assign({}, state);
    // newState.blogUIState = action.payload
    newState.blogUIState = {
        id: action.payload.id,
        index: action.payload.index,
        uiState: 'UPDATING'
    }
    return newState
    // let newState = action.payload console.log(newState)

}
