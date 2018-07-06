import * as loginActions from '../actions/login.actions';
import {User } from '../../../models/user.model'

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  token:string;
  name:string;
  // error message
  errorMessage?: string | null;
}
const initialState: State = {
   isAuthenticated: false,
   token:null,
   name:null,
   errorMessage: null
};

export function reducer(state = initialState, action: loginActions.Actions): State {
  switch (action.type) {

    case loginActions.LOGIN_SUCCESS:
    console.log(action)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        name:action.payload.name,
        errorMessage: null
      };
      case loginActions.LOGIN_FAILURE:
     return{
       ...state,
       isAuthenticated: false,
       errorMessage:'Login failed'
     }
    default:
      return state;
  }
}


export const getLogin = (state: State) => state;