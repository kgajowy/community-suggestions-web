import { ThunkAction } from "redux-thunk";
import { User } from "../auth/user";
import { RootState } from "../reducers";
import Suggestion from "../shared/interfaces/suggestion";
import { support } from "../shared/services/community-suggestions";

export enum SupportActionTypes {
  SupportSuggestion = "support.mark.init",
  SupportSuggestionPending = "support.mark.pending",
  SupportSuggestionError = "support.mark.error",
  SupportSuggestionOk = "support.mark.ok",
  UnsupportSuggestion = "support.not.mark.init",
  UnsupportSuggestionError = "support.not.mark.error",
  UnsupportSuggestionOk = "support.not.mark.ok",
}

interface Action<T, P> {
  type: T;
  payload?: P;
}

type SupportSuggestionAction = Action<
  SupportActionTypes.SupportSuggestion,
  {
    user: User;
    suggestion: Suggestion;
  }
>;
type SupportSuggestionOkAction = Action<
  SupportActionTypes.SupportSuggestionOk,
  Suggestion
>;
type SupportSuggestionPendingAction = Action<
  SupportActionTypes.SupportSuggestionPending,
  Suggestion
>;
type SupportSuggestionErrorAction = Action<
  SupportActionTypes.SupportSuggestionError,
  any
>;

type ThunkResult<T = void> = ThunkAction<
  T,
  RootState,
  undefined,
  SupportSuggestionActions
>;

export const SupportSuggestion = (suggestion: Suggestion): ThunkResult => {
  return (dispatch, getState) => {
    const { auth } = getState();
    if (!auth.loggedIn) {
      return dispatch(SupportSuggestionError("Unauthorized"));
    }
    const user = auth.currentUser!;

    dispatch(SupportSuggestionPending(suggestion));
    support(suggestion, user)
      .then(s => dispatch(SupportSuggestionOk(s)))
      .catch(e => dispatch(SupportSuggestionError(e)));
  };
};

export const SupportSuggestionOk = (
  payload: Suggestion
): SupportSuggestionOkAction => ({
  type: SupportActionTypes.SupportSuggestionOk,
  payload,
});

export const SupportSuggestionPending = (
  payload: Suggestion
): SupportSuggestionPendingAction => ({
  type: SupportActionTypes.SupportSuggestionPending,
  payload,
});

export const SupportSuggestionError = (
  payload: any
): SupportSuggestionErrorAction => ({
  type: SupportActionTypes.SupportSuggestionError,
  payload,
});

export type SupportSuggestionActions =
  | SupportSuggestionAction
  | SupportSuggestionPendingAction
  | SupportSuggestionOkAction
  | SupportSuggestionErrorAction;
