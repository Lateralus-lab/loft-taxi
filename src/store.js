import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './redux/reducers/authReducer';
import authMiddleware from './redux/middleware/authMiddleware';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const allReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(authMiddleware))
);

export default store;
