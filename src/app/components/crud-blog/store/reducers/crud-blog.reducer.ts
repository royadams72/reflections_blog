import {Action, Store, createFeatureSelector, createSelector, ActionReducerMap, State} from "@ngrx/store";
import { BLOG_SELECTED_ACTION, BLOG_UPDATED_ACTION, CRUD_SUCCESS_ACTION } from "../actions/crud.actions";
import * as fromRoot from "../../../../store/app-state";


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

export interface CrudBlogState  {
    blogUIState:BlogUIState,
    crudState:any
}


export const CRUD_BLOG_INITIAL_STATE: CrudBlogState = {
    blogUIState:BLOG_UI_INITIAL_STATE,
    crudState:undefined
}

export interface AppState extends fromRoot.AppState{
    crudBlog:CrudBlogState
}

export const reducers = {
    crudBlog
  };

export function crudBlog(state : CrudBlogState = CRUD_BLOG_INITIAL_STATE, action : Action) {
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
    let newState = Object.assign({}, state);

    newState.blogUIState = {
        id: action.payload.id,
        index: action.payload.index,
        uiState: 'UPDATING'
    }
    return newState;
}

function handleCrudSucessAction(state, action) {
    console.log(action);
    let newState = Object.assign({}, state);
    newState.blogUIState = {
        id: '',
        index: undefined,
        uiState: action.type
    }
    return newState;
}