import * as fromLayout from '../core/store/reducers/layout.reducer';
import * as layoutActions from '../core/store/actions/layout.actions';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as loginActions from '../core/store/actions/login.actions';
import * as fromLogin from '../core/store/reducers/login.reducers';

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
    // layout:undefined,
    // login:undefined
}

export const getRoot = (state : State) => state;

export const getBlogsState = createSelector(getRoot, (state : State) => state);
