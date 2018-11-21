import * as React from 'react'
import {Dispatch} from 'redux'
import {SuggestionActions} from '../actions/suggestions'
import {RootState} from '../reducers'
import useRedux from '../shared/hooks/use-redux'
import {Suggestions} from './components/Suggestions'

export const CommunitySuggestions: React.FunctionComponent<{}> = () => {
    const [{suggestions: suggestionsState}, _]: [RootState, Dispatch<SuggestionActions>] = useRedux<SuggestionActions>()
    const {error, pending, suggestions} = suggestionsState
    return (
        <>
            {pending && <>Loading...</>}
            {error && <>Error.</>}
            {!pending && !error && <Suggestions suggestions={suggestions}/>}
        </>
    )
}