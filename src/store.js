import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducers/auth';
import { authMiddleware } from './middleware/authMiddleware';

export const store = createStore(
  combineReducers({ isLogged: authReducer }),
  compose(
    applyMiddleware(authMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
