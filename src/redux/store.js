import { createStore, applyMiddleware, combineReducers,compose  } from 'redux'
import authReducer from 'Redux/reducers/auth';
import eventReducer from 'Redux/reducers/event';
import thunk from 'redux-thunk'


const reducers = combineReducers({
    auth: authReducer,
    event: eventReducer
})

// export default createStore(reducers, applyMiddleware(thunk, logMiddleware, ajaxMiddleware))
export default createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))