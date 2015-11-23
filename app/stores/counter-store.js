import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter-actions'

// handler
var reducer = combineReducers({
    counter: function (state = 0, action) {
        switch (action.type) {
            case INCREMENT_COUNTER:
            return state + 2
        case DECREMENT_COUNTER:
            return state - 1
        default:
            return state
        }
    }
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState)

    /*
    if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }*/

  return store
}