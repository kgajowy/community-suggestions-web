import * as React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {SuggestionActions, SuggestionSubmit} from '../actions/suggestions'
import {RootState} from '../reducers'
import Suggestion from '../shared/interfaces/suggestion'
import {SubmitForm} from './components/SubmitForm'

interface DispatchProps {
    submit: (suggestion: Suggestion) => any
}

interface StateProps {
    pending: boolean
}

type Props = DispatchProps & StateProps

class SubmitSuggestion extends React.Component<Props> {
    public render() {
        return <SubmitForm onSubmit={this.props.submit} disabled={this.props.pending}/>
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    pending: state.suggestions.submitPending
})

const mapDispatchToProps = (dispatch: Dispatch<SuggestionActions>): DispatchProps => ({
    submit: (suggestion: Suggestion) => dispatch(SuggestionSubmit(suggestion)),
})



export default connect<StateProps, DispatchProps, {}, RootState>
(mapStateToProps, mapDispatchToProps)(SubmitSuggestion) as React.ComponentClass<{}>