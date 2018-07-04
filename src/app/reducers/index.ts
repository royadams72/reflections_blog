import * as fromLayout from '../core/store/reducers/layout.reducer';
import * as layoutActions from '../core/store/actions/layout.actions';
import {ActionReducerMap, createSelector} from '@ngrx/store';

//Get reducers

export interface State {
    readonly layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer
};

export const initialState = {
    layout: fromLayout.reducer(undefined, {} as layoutActions.Actions)
}

export const getRoot = (state : State) => state;

export const getBlogsState = createSelector(getRoot, (state : State) => state);
