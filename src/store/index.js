import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const middlewares = [thunk]

const store = createStore(
    reducers,
   	composeEnhancers(
   		applyMiddleware(...middlewares)
   		)
    )

export default store