import * as React from 'react'
import useSuggestions from './shared/effects/suggestions.effect'

export const Effects: React.FunctionComponent<{}> = () => {
    useSuggestions()

    return <div/>
}