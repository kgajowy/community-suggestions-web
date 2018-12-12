import {applyMiddleware, createStore} from 'redux'

import thunk from 'redux-thunk'
import communityApp from './reducers/index'

export default createStore(communityApp,
    applyMiddleware(thunk))