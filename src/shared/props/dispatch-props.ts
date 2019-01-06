import { ThunkDispatch } from "redux-thunk";
import { notify, ToastActions } from "../../actions/toast";

export const toastDispatch = (
  dispatch: ThunkDispatch<any, undefined, ToastActions>
) => ({
  showToast: (message: string) => dispatch(notify({ message })),
});

export interface ToastDispatchProps {
  showToast: (message: string) => any;
}
