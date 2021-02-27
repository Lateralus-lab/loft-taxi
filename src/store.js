import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './redux/reducers/authReducer';
import profileReducer from './redux/reducers/profileReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';

const saveToLocalStarage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const allReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = createStore(
  allReducers,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => saveToLocalStarage(store.getState()));

export default store;
