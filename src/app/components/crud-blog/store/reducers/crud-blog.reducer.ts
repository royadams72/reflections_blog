import {Action, Store} from "@ngrx/store";
import { GET_BLOG_FOR_FORM, POPULATE_BLOG_FORM_ACTION, UPDATE_UI_ACTION } from "../actions/crud.actions";

export interface crudBlogState {
    id:string;
    uiState:crudUIState
}
export interface crudUIState{
    uiState:string
}
export const crudUIInitialState:crudUIState ={
uiState:''
}
export const crudBlogInitialState: crudBlogState = {
    id:'',
    uiState:crudUIInitialState
}



export function crudBlog(state:crudBlogState = crudBlogInitialState, action:Action) {
    switch (action.type)  {
        case GET_BLOG_FOR_FORM:
        // console.log(state)
        return  handleGetBlogForFormAction(state, action);
        case POPULATE_BLOG_FORM_ACTION:
        case UPDATE_UI_ACTION:
        // console.log(state)
        return  handlePopulateBlogFormAction(state, action);
     
    default:
        return state;
    }
    
}

function  handleGetBlogForFormAction(state, action){
    console.log(state)
        return state;
}
function  handlePopulateBlogFormAction(state, action){
    // const newState = Object.assign({},state);
    // let newState:Blog[] = action.payload.slice();
    let newState = action.payload
    console.log(newState)
    return newState;
}

// export const 