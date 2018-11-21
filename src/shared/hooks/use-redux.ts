import {useContext} from 'react'
// @ts-ignore
import {ReactReduxContext} from 'react-redux'
import {Action, Dispatch} from 'redux'
import {RootState} from '../../reducers'

export function useRedux<T extends Action>(): [RootState, Dispatch<T>] {
    const {storeState: state, store: {dispatch}} = useContext(ReactReduxContext)
    return [state, dispatch]
}

export default useRedux