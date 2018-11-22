import {SuggestionActions, SuggestionActionTypes} from '../actions/suggestions'
import Suggestion from '../shared/interfaces/suggestion'

export interface SuggestionsState {
    pending: boolean;
    suggestions: Suggestion[];
    error: any;
}

export const initialState: SuggestionsState = {
    pending: false,
    suggestions: [],
    error: null,
}

export const SuggestionsReducer = (state: SuggestionsState = initialState, action: SuggestionActions): SuggestionsState => {
    switch (action.type) {
        case SuggestionActionTypes.Submit:
            console.log(`>>> submit action`)
            return {
                ...initialState,
                suggestions: [action.payload!, ...state.suggestions]
            }
        case SuggestionActionTypes.Get:
            console.log(`>>> get action`)
            return {
                ...initialState,
                pending: true,
            }
        case SuggestionActionTypes.Acquired:
            console.log(`>>> acquire action`)
            return {
                ...initialState,
                pending: false,
                suggestions: action.payload!
            }
        case SuggestionActionTypes.Error:
            console.log(`>>> error action`)
            return initialState
        default:
            return initialState
    }
}

