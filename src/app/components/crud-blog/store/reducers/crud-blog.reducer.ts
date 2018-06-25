import {Action, Store} from "@ngrx/store";
import { BLOG_SELECTED_ACTION } from "../actions/crud.actions";

export interface SelectedBlogState{
    id:string;
    index:number
}

export interface CrudBlogState {
    id:string;
    index:number
}

// export const crudUIInitialState:crudUIState ={
// uiState:''
// }

export const CRUD_BLOG_INITIAL_STATE: CrudBlogState = {
    id:'',
    index:undefined
}


export function crudBlog(state:CrudBlogState = CRUD_BLOG_INITIAL_STATE, action:Action) {
    switch (action.type)  {
        
        case BLOG_SELECTED_ACTION:
        console.log(action.type)
        return  handleBlogSelectedAction(state, action); 
    default:
        return state;
    }
    
}

function  handleBlogSelectedAction(state, action){
    console.log(state)
    let newState = Object.assign({}, action.payload);
    // let newState = action.payload
    console.log(newState)
    return newState;
}
