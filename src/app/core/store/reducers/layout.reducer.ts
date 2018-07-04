import * as layout from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
  currentBlogID:string
}

const initialState: State = {
  showSidenav: false,
  currentBlogID:''
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return {
        ...state,
        showSidenav: false,
      };

    case layout.OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true,
      };
      case layout.CURRENT_BLOG_ID:
      console.log(action.payload)
      return handleCurrentBlogID(state, action)
    default:
      return state;
  }
}

function handleCurrentBlogID(state, action){
  console.log(action.payload)
  let newState = {
    ...state,
    currentBlogID: action.payload,
  }
  return newState
}
export const getShowSidenav = (state: State) => state.showSidenav;