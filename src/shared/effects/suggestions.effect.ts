import {useEffect} from 'react'
import {Dispatch} from 'redux'
import {SuggestionActions, SuggestionsAcquired, SuggestionsError} from '../../actions/suggestions'
import {RootState} from '../../reducers'
import {SuggestionsState} from '../../reducers/suggestions'
import useRedux from '../hooks/use-redux'
import {getSuggestions} from '../services/community-suggestions'

export function useSuggestions(): [SuggestionsState, Dispatch<SuggestionActions>] {
    const [{suggestions: suggestionsState}, dispatch]: [RootState, Dispatch<SuggestionActions>] = useRedux<SuggestionActions>()
    const {pending, suggestions} = suggestionsState

    useEffect(
        () => {
            if (pending) {
                console.log(`effect -> pending change to true detected`)
                if (suggestions.length > 0) {
                    console.log(`effect -> suggestions are there already & change detected`, suggestions)
                    dispatch(SuggestionsAcquired(suggestions))
                } else {
                    console.log(`effect -> suggestions are empty, getting suggestions...`)
                    getSuggestions()
                        .then(r => dispatch(SuggestionsAcquired(r)))
                        .catch(e => dispatch(SuggestionsError(e)))
                }
            }
        },
        [pending, suggestions],
    )

    return [suggestionsState, dispatch]
}

export default useSuggestions