import * as React from 'react'
import {useEffect, useReducer} from 'react'
import {Dispatch} from 'redux'
import {SuggestionActions, SuggestionsAcquired, SuggestionsError, SuggestionsGet} from '../actions/suggestions'
import {RootState} from '../reducers'
import {initialState, SuggestionsReducer} from '../reducers/suggestions'
import useRedux from '../shared/hooks/use-redux'
import Suggestion from '../shared/interfaces/suggestion'
import {getSuggestions} from '../shared/services/community-suggestions'
import {Suggestions} from './components/Suggestions'

interface CommunitySuggestionsProps {
    suggestions: Suggestion[]
}

export const CommunitySuggestionsTwo: React.FunctionComponent<{}> = () => {
    const [{suggestions: suggestionsState}, dispatch] : [RootState, Dispatch<SuggestionActions>] = useRedux<SuggestionActions>()
    const {error, pending, suggestions} = suggestionsState

    console.log(`suggestionState`, suggestionsState)
    if (!pending && suggestions.length === 0) {
        console.log(`dispatching` , SuggestionsGet())
        dispatch(SuggestionsGet())
    }

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