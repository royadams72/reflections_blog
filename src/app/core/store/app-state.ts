import { Blog } from '../../models/blog';

export interface AppState {
  readonly loaded: boolean;
  readonly blogs: {[key:number]:Blog}
}

export const initialState:AppState = {
  loaded: false,
   blogs: {}
}