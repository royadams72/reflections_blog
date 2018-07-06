import * as fromLayout from '../core/store/reducers/layout.reducer';
import * as layoutActions from '../core/store/actions/layout.actions';
import {ActionReducerMap, createSelector, MetaReducer, ActionReducer} from '@ngrx/store';
import * as loginActions from '../core/store/actions/login.actions';
import * as fromLogin from '../core/store/reducers/login.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
//Get reducers

export interface State {
    readonly layout: fromLayout.State;
    readonly login: fromLogin.State
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    login: fromLogin.reducer
};

export const initialState:State = {
    layout: fromLayout.reducer(undefined, {} as layoutActions.Actions),
    login: fromLogin.reducer(undefined, {} as loginActions.Actions)
}
//binds to localstorage keys and allows persistence of store data after page reload
//https://www.npmjs.com/package/ngrx-store-localstorage
  export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
    return localStorageSync({keys:['login'] , rehydrate:true})(reducer);
  }
export const metaReducers: Array<MetaReducer<State, any>> = [localStorageSyncReducer];

export const getRoot = (state : State) => state;

export const getBlogsState = createSelector(getRoot, (state : State) => state);
