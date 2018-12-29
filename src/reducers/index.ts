import { combineReducers } from "redux";
import { AuthReducer, AuthState } from "./auth";
import { SuggestionsReducer, SuggestionsState } from "./suggestions";

export interface RootState {
  suggestions: SuggestionsState;
  auth: AuthState;
}

export default combineReducers<RootState>({
  suggestions: SuggestionsReducer,
  auth: AuthReducer,
});
