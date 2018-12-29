import { ToastActions, ToastActionType } from "../actions/toast";
import { Toast } from "../shared/interfaces/toast";

export interface ToastState {
  toasts: Toast[];
}

export const initialState: ToastState = {
  toasts: [],
};

export const ToastsReducer = (
  state: ToastState = initialState,
  action: ToastActions
): ToastState => {
  switch (action.type) {
    case ToastActionType.Show:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case ToastActionType.Hide:
      return {
        ...state,
        toasts: state.toasts.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};
