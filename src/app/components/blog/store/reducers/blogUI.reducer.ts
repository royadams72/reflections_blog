import {Action} from "@ngrx/store";

// import * as fromBlogUIActions from "../actions/blog.actions";
import  {BLOG_SELECTED_ACTION, CRUD_SUCCESS_ACTION} from '../actions/blogUI.actions';


export interface State{
    id:string;
    index:number
    uiState:string
}
export const initialState:State = {
    id:'',
    index:null,
    uiState:'CREATING'
}

export function reducer(state :State = initialState, action : Action) {
    switch (action.type) {
        case BLOG_SELECTED_ACTION:
        return handleBlogSelectedAction(state, action);
    case CRUD_SUCCESS_ACTION:
        return handleCrudSucessAction(state, action)
        default:
            return state;
    }

}


function handleBlogSelectedAction(state, action) {
   let newState = {
       ...state,
        id: action.payload.id,
        index: action.payload.index,
        uiState: 'UPDATING'
    }
    console.log(newState)
    return newState;
}

function handleCrudSucessAction(state, action) {  
   let newState = {
        ...state,
        id: '',
        index: null,
        uiState: action.type
    }
    return newState;
}