import {Action} from "@ngrx/store";

import { Blog } from "../../models/blog";
import { LOAD_BLOGS_ACTION, UPDATE_BLOGS_ACTION, POPULATE_BLOGS_ACTION } from "../actions/blog.actions";
// import { AppState } from "../app.state";

export function blogs(state:Blog[] = [], action:Action) : Blog[] {
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
function  handleLoadBlogsAction(state, action):Blog[]{
    //Must always return the state
    // console.log(state, action.payload)
        return state;
}
function  handlePopulateBlogsAction(state, action):Blog[]{
    // const newState = Object.assign({},state);
    let newState:Blog[] = action.payload.slice(); 
    // console.log(state,newState)
    return newState;
}