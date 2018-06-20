import { Blog } from '../models/blog';

export interface AppState {
  readonly loaded: boolean;
  readonly blogs: Blog[];
}

export const initialState:AppState = {
  loaded: false,
   blogs: []
}