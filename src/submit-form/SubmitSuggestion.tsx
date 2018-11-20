import * as React from 'react'
import {SubmitForm} from './components/SubmitForm'
import Suggestion from '../shared/interfaces/suggestion'

export default class SubmitSuggestion extends React.Component<{}, {}> {
    public onSubmit = (suggestion: Suggestion) => {
        // TODO dispatch
        console.log(`submitting suggestion:`, suggestion)
    }

    public render() {
        return <SubmitForm onSubmit={this.onSubmit}/>
    }
}