import {Action, Store, createFeatureSelector, createSelector, ActionReducerMap, State} from "@ngrx/store";
import { BLOG_SELECTED_ACTION, BLOG_UPDATED_ACTION, CRUD_SUCCESS_ACTION } from "../actions/crud.actions";
import * as fromCrudState from "../crud.state"




export function crudBlog(state : fromCrudState.CrudBlogState = fromCrudState.CRUD_BLOG_INITIAL_STATE, action : Action) {
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