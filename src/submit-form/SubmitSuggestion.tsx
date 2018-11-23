import * as React from 'react'
import {SuggestionActions, SuggestionSubmit} from '../actions/suggestions'
import useRedux from '../shared/hooks/use-redux'
import Suggestion from '../shared/interfaces/suggestion'
import {SubmitForm} from './components/SubmitForm'

export const SubmitSuggestion: React.FunctionComponent<{}> = () => {
    const [{suggestions}, dispatch] = useRedux<SuggestionActions>()
    const submitSuggestion = (s: Suggestion) => dispatch(SuggestionSubmit(s))

    return <SubmitForm onSubmit={submitSuggestion} disabled={suggestions.submitPending || suggestions.pending}/>
}