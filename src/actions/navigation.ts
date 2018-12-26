import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { getSuggestions } from "../shared/services/community-suggestions";

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

type LogInOkAction = Action<
  NavigationActionTypes.LogInOk,
  any // TODO User object
>;

type LogInErrorAction = Action<NavigationActionTypes.LogInError, any>;

type ThunkResult = ThunkAction<void, RootState, undefined, NavigationActions>;

export const LogIn = (): ThunkResult => {
  console.log(`Log In`);
  return dispatch => {
    dispatch({
      type: NavigationActionTypes.LogIn,
    });
    getSuggestions()
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

export type NavigationActions = LogInAction | LogInOkAction | LogInErrorAction;
