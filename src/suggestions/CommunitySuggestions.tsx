import * as React from 'react'
import {useReducer} from 'react'
import {SuggestionsGet} from '../actions/suggestions'
import {initialState, SuggestionsReducer} from '../reducers/suggestions'
import Suggestion from '../shared/interfaces/suggestion'
import {Suggestions} from './components/Suggestions'

interface CommunitySuggestionsProps {
    suggestions: Suggestion[]
}

export const CommunitySuggestions: React.FunctionComponent<{}> = () => {
    const [{pending, suggestions = [], error}, dispatch] = useReducer(
        SuggestionsReducer,
        initialState,
        SuggestionsGet()
    )

    return (
        <>
            {pending && <>Loading...</>}
            {error && <>Error.</>}
            {!pending && !error && <Suggestions suggestions={suggestions}/>}
        </>
    )
}