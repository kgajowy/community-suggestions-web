import { ThunkAction } from "redux-thunk";
import { AuthState } from "../reducers/auth";
import { Toast } from "../shared/interfaces/toast";

export enum ToastActionType {
  Show = "toast.show",
  Hide = "toast.hide",
}

interface Action<T, P> {
  type: T;
  payload: P;
}

type ShowAction = Action<ToastActionType.Show, Toast>;
type HideAction = Action<ToastActionType.Hide, Toast>;

type ThunkResult = ThunkAction<void, AuthState, undefined, ToastActions>;

const ShowToast = (payload: Toast): ShowAction => ({
  type: ToastActionType.Show,
  payload,
});

export const notify = ({
  duration = 2000,
  message,
  shownAt = new Date().getTime(),
}: Toast): ThunkResult => {
  const toast = { duration, message, shownAt };
  return dispatch => {
    dispatch(ShowToast(toast));

    setTimeout(() => {
      dispatch(HideToast(toast));
    }, duration);
  };
};

const HideToast = (payload: Toast): HideAction => ({
  type: ToastActionType.Hide,
  payload,
});

export type ToastActions = ShowAction | HideAction;
