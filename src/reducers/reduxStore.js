import { compose, createStore, applyMiddleware } from 'redux';
import { authMiddlaware } from '../middleware/authMiddlaware';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ auth: authReducer });

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(authMiddlaware))
);

window.store = store;

export default store;
