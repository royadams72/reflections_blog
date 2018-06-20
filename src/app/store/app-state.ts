import { Blog } from '../models/blog';

export interface AppState {
  readonly blogs: Blog[];
}
