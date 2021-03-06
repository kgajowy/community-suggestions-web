import { AuthActions, NavigationActionTypes } from "../actions/navigation";
import { User } from "../auth/user";

export interface AuthState {
  loginPending: boolean;
  loggedIn: boolean;
  loginError: any;
  currentUser?: User;
  logoutPending: boolean;
}

export const initialState: AuthState = {
  loginPending: false,
  loggedIn: false,
  loginError: null,
  currentUser: undefined,
  logoutPending: false,
};

export const AuthReducer = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case NavigationActionTypes.LogIn:
      return {
        ...state,
        loginPending: true,
        loginError: null,
      };
    case NavigationActionTypes.LogInError:
      return {
        ...state,
        loginPending: false,
        loggedIn: false,
        loginError: action.payload,
      };
    case NavigationActionTypes.LogInOk:
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
