import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store=createStore(countReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store