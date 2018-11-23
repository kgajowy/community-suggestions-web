import Suggestion from '../shared/interfaces/suggestion'

export enum SuggestionActionTypes {
    Get = 'suggestions.get',
    Acquired = 'suggestions.acquired',
    Error = 'suggestions.error',
    Submit = 'suggestions.submit',
    SubmitError = 'suggestions.submit.error',
    SubmitOk = 'suggestions.submit.ok',
}

interface Action<T, P> {
    type: T
    payload?: P
}

type SuggestionGetAction = Action<SuggestionActionTypes.Get, null>
type SuggestionAcquiredAction = Action<SuggestionActionTypes.Acquired, Suggestion[]>
type SuggestionErrorAction = Action<SuggestionActionTypes.Error, any>
type SuggestionSubmitAction = Action<SuggestionActionTypes.Submit, Suggestion>
type SuggestionSubmitErrorAction = Action<SuggestionActionTypes.SubmitError, any>
type SuggestionSubmitOkAction = Action<SuggestionActionTypes.SubmitOk, Suggestion>

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

export const SuggestionSubmit = (payload: Suggestion): SuggestionSubmitAction => ({
    type: SuggestionActionTypes.Submit,
    payload,
})

export const SuggestionSubmitError = (payload: any): SuggestionSubmitErrorAction => ({
    type: SuggestionActionTypes.SubmitError,
    payload,
})

export const SuggestionSubmitOk = (payload: Suggestion): SuggestionSubmitOkAction => ({
    type: SuggestionActionTypes.SubmitOk,
    payload,
})

export type SuggestionActions =
    SuggestionGetAction |
    SuggestionAcquiredAction |
    SuggestionErrorAction |
    SuggestionSubmitAction |
    SuggestionSubmitErrorAction |
    SuggestionSubmitOkAction
