import {Action} from "@ngrx/store";
import * as _ from  "lodash";
import * as blogActions from "../actions/blog.actions";
import { Blog } from "../../../../models/blog";


export interface State{
    readonly loaded: boolean;
    readonly blogs: {[key:number]:Blog}

}
export const initialState:State = {
    loaded:false,
    blogs: {}

}


export function reducer(state :State = initialState, action : Action) {
    switch (action.type) {

        case blogActions.LOAD_BLOGS_ACTION:
        // console.log(state)
        return handleLoadBlogsAction(state, action);

    case blogActions.BLOGS_LOADED_ACTION:
        return handleBlogsLoadedAction(state, action);
    case blogActions.BLOG_UPDATED_ACTION:
        return handleBlogUpdatedAction(state, action);

    case blogActions.BLOG_DELETED_ACTION:
        return handleBlogDeletedAction(state, action);

        case blogActions.BLOG_ADDED_ACTION:
        return handleBlogAddedAction(state, action);

        case blogActions.BLOG_ADDED_TO_DB_ACTION:
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
    // console.log(output)
    let blogs = Object.assign({},  action.payload);
    // console.log(state, blogs)
    let newState = Object.assign({}, state);
     newState = {
        loaded:true,
        blogs:blogs
    }
    return newState;
}
function handleBlogUpdatedAction(state, action) {
    // console.log(state.blogs)
    const index = action.payload.index;
    let newState = Object.assign({}, state);
    const blogs = Object.assign({}, state.blogs);
    blogs[index] = action.payload.blog
    newState = {
        loaded:newState.loaded,
        blogs: blogs
    }
    // console.log(blogs[index])
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
    // console.log(n);
    return newState;
}

export const getBlogUIState = (state: State) => state;