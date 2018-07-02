
import * as fromCrud from './crud-blog.reducer'
import * as fromRoot from '../../../../reducers'
import { createFeatureSelector } from '@ngrx/store';

export interface CrudState {
    crud: fromCrud.State;
  }
  
  export interface State extends fromRoot.State {
    crudState: CrudState;
  }
  
  export const reducers = {
    crud: fromCrud.reducer,

  };

  export const selectCrudState = createFeatureSelector<CrudState>('crudState');