import {
  SuggestionActions,
  SuggestionActionTypes
} from "../actions/suggestions";
import Suggestion from "../shared/interfaces/suggestion";

export interface SuggestionsState {
  pending: boolean;
  suggestions: Suggestion[];
  error: any;
  submittedSuggestion?: Suggestion;
  submitPending: boolean;
  submitError: any;
}

export const initialState: SuggestionsState = {
  pending: false,
  suggestions: [],
  error: null,
  submittedSuggestion: undefined,
  submitPending: false,
  submitError: null
};

export const SuggestionsReducer = (
  state: SuggestionsState = initialState,
  action: SuggestionActions
): SuggestionsState => {
  switch (action.type) {
    case SuggestionActionTypes.Submit:
      console.log(`>>> submit action`);
      return {
        ...state,
        submitPending: true,
        submitError: null,
        submittedSuggestion: action.payload
      };
    // TODO block submitting when still loading all suggestions
    case SuggestionActionTypes.SubmitError:
      console.log(`>>> submit action error`);
      return {
        ...state,
        submitPending: false,
        submitError: action.payload
      };
    case SuggestionActionTypes.SubmitOk:
      console.log(`>>> submit action ok`);
      return {
        ...state,
        submitPending: false,
        suggestions: [action.payload!, ...state.suggestions]
      };
    case SuggestionActionTypes.Get:
      console.log(`>>> get action`);
      return {
        ...state,
        pending: true
      };
    case SuggestionActionTypes.Acquired:
      console.log(`>>> acquire action`);
      return {
        ...state,
        pending: false,
        suggestions: [...state.suggestions, ...action.payload!]
      };
    case SuggestionActionTypes.Error:
      console.log(`>>> error action`);
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return initialState;
  }
};
