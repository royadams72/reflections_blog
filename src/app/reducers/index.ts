import * as fromBlogs from '../core/store/reducers/blog.reducer';
import * as blogActions from '../core/store/actions/blog.actions';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { ActionReducer } from 'ngx-bootstrap/mini-ngrx';
//Interface to hold all states, top level state interface is just a map of keys to inner state types.
export interface Root {
  readonly blogState: fromBlogs.State;
}
export type RootActions = blogActions.Actions;

//Get reducers
export const initialState = {
  blogState: fromBlogs.reducer(undefined, {} as blogActions.Actions)
}

export interface State {
    root: Root;
  }
//Make sure below is not a function expression
  export function rootReducer(state: Root = initialState, action: RootActions){
    return {
        blogState: fromBlogs.reducer(state.blogState, action as blogActions.Actions)
    };
  };

  export const reducers: ActionReducerMap<State> = {
    root: rootReducer
  };
  
//   console.log all actions
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }

  export const getRoot = (state: State) => state.root;


export const getBlogsState = createSelector(
  getRoot,
  (state: Root) => state.blogState
);
