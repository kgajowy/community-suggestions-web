import Suggestion from '../shared/interfaces/suggestion'

export enum SuggestionActionTypes {
    Get = 'suggestions.get',
    Acquired = 'suggestions.acquired',
    Error = 'suggestions.error',
    Submit = 'suggestions.submit',
}

interface Action<T, P> {
    type: T
    payload?: P
}

type SuggestionGetAction = Action<SuggestionActionTypes.Get, null>
type SuggestionAcquiredAction = Action<SuggestionActionTypes.Acquired, Suggestion[]>
type SuggestionErrorAction = Action<SuggestionActionTypes.Error, any>
type SuggestionSubmitAction = Action<SuggestionActionTypes.Submit, Suggestion>

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

export const SuggestionsSubmit = (payload: Suggestion): SuggestionSubmitAction => ({
    type: SuggestionActionTypes.Submit,
    payload,
})

export type SuggestionActions =
    SuggestionGetAction |
    SuggestionAcquiredAction |
    SuggestionErrorAction |
    SuggestionSubmitAction