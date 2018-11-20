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
        case SuggestionActionTypes.Get:
            console.log(`>>> get action`)
            return initialState
        case SuggestionActionTypes.Acquired:
            console.log(`>>> acquire action`)
            return initialState
        case SuggestionActionTypes.Error:
            console.log(`>>> error action`)
            return initialState
        default:
            return initialState
    }
}

