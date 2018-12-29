import { combineReducers } from "redux";
import { AuthReducer, AuthState } from "./auth";
import { SuggestionsReducer, SuggestionsState } from "./suggestions";
import { ToastsReducer, ToastState } from "./toast";

export interface RootState {
  suggestions: SuggestionsState;
  auth: AuthState;
  toast: ToastState;
}

export default combineReducers<RootState>({
  suggestions: SuggestionsReducer,
  auth: AuthReducer,
  toast: ToastsReducer,
});
