import {Action} from "@ngrx/store";

import { Blog } from "../../models/blog";
import { LOAD_BLOGS_ACTION, UPDATE_BLOGS_ACTION, POPULATE_BLOGS_ACTION } from "../actions/blog.actions";
import { initialState, AppState } from "../app-state";
// import { AppState } from "../app.state";

export function blogs(state = initialState.blogs, action:Action) {
    switch (action.type)  {
        case LOAD_BLOGS_ACTION:
        // console.log(state)
        return  handleLoadBlogsAction(state, action);
        case POPULATE_BLOGS_ACTION:
        // console.log(state, action)
        return handlePopulateBlogsAction(state, action);
    default:
        return state;
    }
    
}
// function  handleUpdateBlogsAction(state, action):Blog[]{
//     //Must always return the state
//     console.log(state, action.payload)
//         return state;
// }
function  handleLoadBlogsAction(state, action){
    //Must always return the state
    // console.log(state, action.payload)
        return state;
}
function  handlePopulateBlogsAction(state, action){
    const newState = Object.assign({},action.payload);
    // let newState:Blog[] = action.payload.slice(); 
    // console.log(state,newState)
    return newState;
}