import * as React from 'react'
// @ts-ignore
import {connect} from 'react-redux'
import {AnyAction, Dispatch} from 'redux'
import {SuggestionsGet} from './actions/suggestions'

interface InitAppProps {
    dispatch: Dispatch<AnyAction>
}

class InitApp extends React.Component<InitAppProps> {

    public componentDidMount() {
        console.log(`dispatching initial GET`)
        this.props.dispatch(SuggestionsGet())
    }

    public render() {
        return <div/>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): InitAppProps => ({
    dispatch
})

export default connect(null, mapDispatchToProps)(InitApp)