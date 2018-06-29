import {Action} from "@ngrx/store";
import { LOAD_BLOGS_ACTION, BLOGS_LOADED_ACTION } from "../actions/blog.actions";
import { BLOG_UPDATED_ACTION, BLOG_DELETED_ACTION, BLOG_ADDED_ACTION, BLOG_ADDED_TO_DB_ACTION } from "../../../components/crud-blog/store/actions/crud.actions";
import * as _ from  "lodash";
import { Blog } from "../../../models/blog";

export interface State {
    readonly loaded: boolean;
    readonly blogs: {[key:number]:Blog}
  }
  
  const initialState: State = {
    loaded:false,
    blogs: {}
  };
  

export function blogs(state:State = initialState, action : Action):State {
    switch (action.type) {
        case LOAD_BLOGS_ACTION:
            // console.log(state)
            return handleLoadBlogsAction(state, action);

        case BLOGS_LOADED_ACTION:
            return handleLoadedBlogsAction(state, action);

        case BLOG_UPDATED_ACTION:
            return handleBlogUpdatedAction(state, action);

        case BLOG_DELETED_ACTION:
            return handleBlogDeletedAction(state, action);

            case BLOG_ADDED_ACTION:
            return handleBlogAddedAction(state, action);

            case BLOG_ADDED_TO_DB_ACTION:
            console.log(state)
            return handleBlogAddedToDBAction(state, action);
        default:
            return state;
    }

}

function handleLoadBlogsAction(state, action) {
    //Must always return the state
    return state;
}
function handleLoadedBlogsAction(state, action) {
    const newState = Object.assign({}, action.payload);
    return newState;
}

function handleBlogUpdatedAction(state, action) {
    // console.log(state)
    const index = action.payload.index;
    const newState = Object.assign({}, state);
    newState[index] = action.payload.blog
    // console.log(newState)
    return newState;
}

function handleBlogDeletedAction(state, action) {
    // console.log(state)
    const index = action.payload.index;
    const newState = Object.assign({}, state);
    delete newState[index];
    // console.log(newState)
    return newState;
}

function handleBlogAddedAction(state, action) {
    return state;
}

function handleBlogAddedToDBAction(state, action) {
    let n = _.values(state);
    let index:number = n.length;
    let newState = {
        ...state
    }
    newState[index] = action.payload
    console.log(state, action.payload);
    return newState;
}

export const getBlogs = (state: State) => state.blogs;