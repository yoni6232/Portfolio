import {createStore,combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import siteReducer from '../src/reducers/siteReducer'
import usersReducer from '../src/reducers/usersReducer'

const store = createStore(
    combineReducers({
        siteReducer,
        usersReducer
    }),
    {},
    applyMiddleware(thunk)
);

export default store;
