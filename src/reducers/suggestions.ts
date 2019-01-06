import {
  SuggestionActions,
  SuggestionActionTypes,
} from "../actions/suggestions";
import {
  SupportActionTypes,
  SupportSuggestionActions,
} from "../actions/support";
import Suggestion from "../shared/interfaces/suggestion";

export interface SuggestionState {
  id: string;
  suggestion: Suggestion;
  changePending: boolean;
}

export interface SuggestionsState {
  pending: boolean;
  suggestions: Suggestion[];
  suggestionStates: SuggestionState[];
  error: any;
  submittedSuggestion?: Suggestion;
  submitPending: boolean;
  submitError: any;
}

export const initialState: SuggestionsState = {
  pending: false,
  suggestions: [],
  suggestionStates: [],
  error: null,
  submittedSuggestion: undefined,
  submitPending: false,
  submitError: null,
};

export const SuggestionsReducer = (
  state: SuggestionsState = initialState,
  action: SuggestionActions & SupportSuggestionActions
): SuggestionsState => {
  console.log(`SuggestionsReducer`, action.type);
  switch (action.type) {
    case SuggestionActionTypes.Submit:
      return {
        ...state,
        submitPending: true,
        submitError: null,
        submittedSuggestion: action.payload,
      };
    // TODO block submitting when still loading all suggestions
    case SuggestionActionTypes.SubmitError:
      return {
        ...state,
        submitPending: false,
        submitError: action.payload,
      };
    case SuggestionActionTypes.SubmitOk:
      return {
        ...state,
        submitPending: false,
        suggestions: [action.payload!, ...state.suggestions],
        suggestionStates: [
          {
            id: action.payload.id,
            suggestion: action.payload,
            changePending: false,
          },
          ...state.suggestionStates,
        ],
      };
    case SuggestionActionTypes.Get:
      return {
        ...state,
        pending: true,
      };
    case SuggestionActionTypes.Acquired:
      return {
        ...state,
        pending: false,
        suggestions: action.payload,
        suggestionStates: (action.payload as Suggestion[]).map(s => ({
          id: s.id,
          suggestion: s,
          changePending: false,
        })),
      };
    case SuggestionActionTypes.Error:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case SupportActionTypes.SupportSuggestionPending:
      return {
        ...state,
        suggestionStates: state.suggestionStates.map(s => {
          return s.id === action.payload.id ? { ...s, changePending: true } : s;
        }),
      };
    case SupportActionTypes.SupportSuggestionOk:
      return {
        ...state,
        suggestions: state.suggestions.map(s => {
          return s.id === action.payload.id ? action.payload : s;
        }),
        suggestionStates: state.suggestionStates.map(s => {
          return s.id === action.payload.id
            ? { ...s, changePending: false }
            : s;
        }),
      };
    default:
      return state;
  }
};
