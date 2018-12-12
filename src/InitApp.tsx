import * as React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {SuggestionActions, SuggestionsGet} from './actions/suggestions'

interface InitAppProps {
    fetch: () => void
}

class InitApp extends React.Component<InitAppProps> {
    public componentDidMount() {
        this.props.fetch()
    }

    public render() {
        return <React.Fragment/>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SuggestionActions>): InitAppProps => ({
    fetch: () => dispatch(SuggestionsGet())
})

export default connect(null, mapDispatchToProps)(InitApp)