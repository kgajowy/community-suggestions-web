import * as React from 'react'
import {useEffect, useReducer} from 'react'
import {SuggestionsAcquired, SuggestionsError, SuggestionsGet} from '../actions/suggestions'
import {initialState, SuggestionsReducer} from '../reducers/suggestions'
import Suggestion from '../shared/interfaces/suggestion'
import {getSuggestions} from '../shared/services/community-suggestions'
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

    // TODO move to 'effects'
    // TODO add debounce?
    useEffect(
        () => {
            if (pending) {
                getSuggestions()
                    .then(r => dispatch(SuggestionsAcquired(r)))
                    .catch(e => dispatch(SuggestionsError(e)))
            }
            //const subscription = props.source.subscribe();
            //return () => {
            //    subscription.unsubscribe();
            //};
        },
        [pending],
    );

    return (
        <>
            {pending && <>Loading...</>}
            {error && <>Error.</>}
            {!pending && !error && <Suggestions suggestions={suggestions}/>}
        </>
    )
}