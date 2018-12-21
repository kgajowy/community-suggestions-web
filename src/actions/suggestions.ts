import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import Suggestion from "../shared/interfaces/suggestion";
import {
  getSuggestions,
  submitSuggestion,
} from "../shared/services/community-suggestions";

export enum SuggestionActionTypes {
  Get = "suggestions.get",
  Acquired = "suggestions.acquired",
  Error = "suggestions.error",
  Submit = "suggestions.submit",
  SubmitError = "suggestions.submit.error",
  SubmitOk = "suggestions.submit.ok",
}

interface Action<T, P> {
  type: T;
  payload?: P;
}

type SuggestionGetAction = Action<SuggestionActionTypes.Get, null>;
type SuggestionAcquiredAction = Action<
  SuggestionActionTypes.Acquired,
  Suggestion[]
>;
type SuggestionErrorAction = Action<SuggestionActionTypes.Error, any>;
type SuggestionSubmitAction = Action<SuggestionActionTypes.Submit, Suggestion>;
type SuggestionSubmitErrorAction = Action<
  SuggestionActionTypes.SubmitError,
  any
>;
type SuggestionSubmitOkAction = Action<
  SuggestionActionTypes.SubmitOk,
  Suggestion
>;

type ThunkResult = ThunkAction<void, RootState, undefined, SuggestionActions>;

export const SuggestionsGet = (): ThunkResult => {
  console.log(`SuggestionsGet 1`);
  return dispatch => {
    console.log(`SuggestionsGet 2`);
    dispatch({
      type: SuggestionActionTypes.Get,
    });
    getSuggestions()
      .then(r => dispatch(SuggestionsAcquired(r)))
      .catch(e => dispatch(SuggestionsError(e)));
  };
};

export const SuggestionsAcquired = (
  payload: Suggestion[]
): SuggestionAcquiredAction => ({
  type: SuggestionActionTypes.Acquired,
  payload,
});

export const SuggestionsError = (payload: any): SuggestionErrorAction => ({
  type: SuggestionActionTypes.Error,
  payload,
});

export const SuggestionSubmit = (payload: Suggestion): ThunkResult => {
  console.log(`SuggestionSubmit 1`);
  return dispatch => {
    dispatch({
      type: SuggestionActionTypes.Submit,
      payload,
    });
    console.log(`SuggestionSubmit 2`);
    submitSuggestion(payload)
      .then(s => dispatch(SuggestionSubmitOk(s)))
      .catch(e => dispatch(SuggestionSubmitError(e)));
  };
};

export const SuggestionSubmitError = (
  payload: any
): SuggestionSubmitErrorAction => ({
  type: SuggestionActionTypes.SubmitError,
  payload,
});

export const SuggestionSubmitOk = (
  payload: Suggestion
): SuggestionSubmitOkAction => ({
  type: SuggestionActionTypes.SubmitOk,
  payload,
});

export type SuggestionActions =
  | SuggestionGetAction
  | SuggestionAcquiredAction
  | SuggestionErrorAction
  | SuggestionSubmitAction
  | SuggestionSubmitErrorAction
  | SuggestionSubmitOkAction;
