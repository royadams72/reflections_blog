import * as loginActions from '../actions/login.actions';
import {User } from '../../../models/user.model'

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}
const initialState: State = {
   isAuthenticated: false,
   user: null,
   errorMessage: null
};

export function reducer(state = initialState, action: loginActions.Actions): State {
  switch (action.type) {

    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
      case loginActions.LOGIN_FAILURE:
     return{
       ...state,
       isAuthenticated: false,
       user: null,
       errorMessage:'Login failed'
     }
    default:
      return state;
  }
}


export const getLogin = (state: State) => state;