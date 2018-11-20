import Suggestion from '../shared/interfaces/suggestion'

export enum SuggestionActionTypes {
    Get = 'suggestions.get',
    Acquired = 'suggestions.acquired',
    Error = 'suggestions.error',
}

interface Action<T, P> {
    type: T
    payload?: P
}

type SuggestionGetAction = Action<SuggestionActionTypes.Get, null>
type SuggestionAcquiredAction = Action<SuggestionActionTypes.Acquired, Suggestion[]>
type SuggestionErrorAction = Action<SuggestionActionTypes.Error, any>

export const SuggestionsGet = (): SuggestionGetAction => ({
    type: SuggestionActionTypes.Get,
})

export const SuggestionsAcquired = (payload: Suggestion[]): SuggestionAcquiredAction => ({
    type: SuggestionActionTypes.Acquired,
    payload,
})

export const SuggestionsError = (payload: any): SuggestionErrorAction => ({
    type: SuggestionActionTypes.Error,
    payload,
})

export type SuggestionActions =
    SuggestionGetAction |
    SuggestionAcquiredAction |
    SuggestionErrorAction