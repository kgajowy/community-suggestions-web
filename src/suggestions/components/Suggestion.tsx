import * as React from 'react'
import { default as SuggestionInterface } from '../../shared/interfaces/suggestion'

export const Suggestion : React.FunctionComponent<SuggestionInterface> = (suggestion: SuggestionInterface) => <>
    <h3>{suggestion.title}</h3>
    <p>{suggestion.description}</p>
</>