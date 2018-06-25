import {Action, Store} from "@ngrx/store";
import { BLOG_SELECTED_ACTION } from "../actions/crud.actions";

export interface crudBlogState {
    id:string;
    index:number
}
// export interface crudUIState{
//     uiState:string
// }
// export const crudUIInitialState:crudUIState ={
// uiState:''
// }
export const crudBlogInitialState: crudBlogState = {
    id:'',
   index:undefined
}


export function crudBlog(state:crudBlogState = crudBlogInitialState, action:Action) {
    switch (action.type)  {
        case BLOG_SELECTED_ACTION:
        return  handleBlogSelectedAction(state, action); 
    default:
        return state;
    }
    
}

function  handleBlogSelectedAction(state, action){
    let newState = action.payload
    console.log(newState)
    return newState;
}
