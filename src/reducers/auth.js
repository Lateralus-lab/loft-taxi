import {
  GET_LOGGED_OUT,
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
} from '../actions/authAction';

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
  error: '',
};

export default function authReducer(state = initialState, action) {
  const reducers = {
    [GET_LOGGED_OUT]: () => {
      return { ...state, isLoggedIn: false };
    },
    [FETCH_AUTH_REQUEST]: () => {
      return { ...state, isLoggedIn: false };
    },
    [FETCH_AUTH_SUCCESS]: (payload) => {
      return { ...state, isLoggedIn: true, token: payload };
    },
    [FETCH_AUTH_FAILURE]: (payload) => {
      return { ...state, isLoggedIn: false, error: payload };
    },
  };

  if (reducers[action.type]) {
    return reducers[action.type](action.payload);
  }
  return state;
}
