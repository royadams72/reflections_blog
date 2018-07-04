
import * as fromLayout from '../core/store/reducers/layout.reducer';
import * as layoutActions from '../core/store/actions/layout.actions';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { ActionReducer } from 'ngx-bootstrap/mini-ngrx';
//Interface to hold all states, top level state interface is just a map of keys to inner state types.
export interface Root {
  // readonly blogS: fromBlogs.State;
  // readonly layout: fromLayout.State
}
// export type RootActions =  layoutActions.Actions;

//Get reducers
export const initialState = {
  // blogS: fromBlogs.reducer(undefined, {} as blogActions.Actions),
  layout: fromLayout.reducer(undefined, {} as layoutActions.Actions)
}

export interface State {
  readonly layout: fromLayout.State
  }
//Make sure below is not a function expression
  // export function rootReducer(state: Root = initialState, action: RootActions){
  //   return {
  //       // blogS: fromBlogs.reducer(state.blogS, action as blogActions.Actions),
  //       layout: fromLayout.reducer(state.layout, {} as layoutActions.Actions)
  //   };
  // };
  export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer
    // router: fromRouter.routerReducer,
  };
  // export const reducers: ActionReducerMap<State> = {
  //   root: rootReducer
  // };
  
//   console.log all actions
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }

  export const getRoot = (state: State) => state;


export const getBlogsState = createSelector(
  getRoot,
  (state: Root) => state
);
