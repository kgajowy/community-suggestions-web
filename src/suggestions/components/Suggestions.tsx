import * as React from 'react'
import Suggestion from '../../shared/interfaces/suggestion'
import {Suggestion as SuggestionView} from './Suggestion'

interface SuggestionsProps {
    suggestions: Suggestion[]
}

export const Suggestions : React.FunctionComponent<SuggestionsProps> = ({suggestions = []}) => <>
    { suggestions.map((s, i) => <SuggestionView key={i} {...s}/>)}
</>