import * as React from 'react'
import {SuggestionActions, SuggestionsSubmit} from '../actions/suggestions'
import useRedux from '../shared/hooks/use-redux'
import Suggestion from '../shared/interfaces/suggestion'
import {SubmitForm} from './components/SubmitForm'

export const SubmitSuggestion: React.FunctionComponent<{}> = () => {
    const [_, dispatch] = useRedux<SuggestionActions>()
    const submitSuggestion = (s: Suggestion) => dispatch(SuggestionsSubmit(s))

    return <SubmitForm onSubmit={submitSuggestion}/>
}