import {Action} from "@ngrx/store";
import { LOAD_BLOGS_ACTION, BLOGS_LOADED_ACTION } from "../actions/blog.actions";
import { BLOG_UPDATED_ACTION, BLOG_DELETED_ACTION, BLOG_ADDED_ACTION, BLOG_ADDED_TO_DB_ACTION } from "../../../components/crud-blog/store/actions/crud.actions";
import * as _ from  "lodash";
import { Blog } from "../../../models/blog";

export interface State {
    readonly loaded: boolean;
    readonly blogs: {[key:number]:Blog}
  }
  
  export const initialState: State = {
    loaded:false,
    blogs: {}
  };
  

export function reducer(state:State = initialState, action : Action):State {
    switch (action.type) {
        case LOAD_BLOGS_ACTION:
            // console.log(state)
            return handleLoadBlogsAction(state, action);

        case BLOGS_LOADED_ACTION:
            return handleBlogsLoadedAction(state, action);

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
function handleBlogsLoadedAction(state, action) {
    
    // console.log(output);
    console.log(state, action.payload)
    let blog = Object.assign({},  action.payload);
    let newState = Object.assign({}, state);
     newState = {
        loaded:true,
        blogs:blog
    }
    return newState;
}

function handleBlogUpdatedAction(state, action) {
    console.log(state.blogs)
    const index = action.payload.index;
    let newState = Object.assign({}, state);
    const blogs = Object.assign({}, state.blogs);
    blogs[index] = action.payload.blog
    newState = {
        loaded:newState.loaded,
        blogs: blogs
    }
    console.log(blogs[index])
    return newState;
}

function handleBlogDeletedAction(state, action) {
    // console.log(state)
    const index = action.payload.index;
    const newState = Object.assign({}, state);
    delete newState.blogs[index];
    // console.log(newState)
    return newState;
}

function handleBlogAddedAction(state, action) {
    return state;
}

function handleBlogAddedToDBAction(state, action) {
    let n = _.values(state.blogs);
    let index:number = n.length;
    let newState = {
        ...state
    }
    newState.blogs[index] = action.payload
    console.log(n);
    return newState;
}

export const getBlogs = (state: State) => state.blogs;