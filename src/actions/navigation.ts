import { ThunkAction } from "redux-thunk";
import { LoginDto, User } from "../auth/user";
import { AuthState } from "../reducers/auth";
import { logIn } from "../shared/services/auth";

export enum NavigationActionTypes {
  LogIn = "nav.login",
  LogInError = "nav.login.error",
  LogInOk = "nav.login.ok",
  LogOut = "nav.logout",
  LogOutOk = "nav.lotout.ok",
}

interface Action<T, P> {
  type: T;
  payload?: P;
}

type LogInAction = Action<NavigationActionTypes.LogIn, null>;

type LogInOkAction = Action<NavigationActionTypes.LogInOk, User>;

type LogInErrorAction = Action<NavigationActionTypes.LogInError, any>;

type LogOutAction = Action<NavigationActionTypes.LogOut, null>;

type ThunkResult = ThunkAction<void, AuthState, undefined, AuthActions>;
export const LogIn = (loginData: LoginDto): ThunkResult => {
  console.log(`Log In`, loginData);
  return dispatch => {
    dispatch({
      type: NavigationActionTypes.LogIn,
    });

    logIn(loginData)
      .then(r => dispatch(LogInOk(r)))
      .catch(e => dispatch(LogInError(e)));
  };
};

export const LogInOk = (
  payload: any // TODO user obj
): LogInOkAction => ({
  type: NavigationActionTypes.LogInOk,
  payload,
});

export const LogInError = (payload: any): LogInErrorAction => ({
  type: NavigationActionTypes.LogInError,
  payload,
});

export const LogOut = (): LogOutAction => ({
  type: NavigationActionTypes.LogOut,
});

export type AuthActions =
  | LogInAction
  | LogInOkAction
  | LogInErrorAction
  | LogOutAction;
