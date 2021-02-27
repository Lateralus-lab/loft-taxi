import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  SIGN_OUT,
} from '../actions/types';

export const initialState = {
  isLoggedIn: false,
  isFetching: false,
  msgError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST:
      return { ...state, isLoggedIn: false, isFetching: true, msgError: false };
    case FETCH_AUTH_FAILURE:
      return { ...state, isLoggedIn: false, isFetching: false, msgError: true };
    case FETCH_AUTH_SUCCESS:
      return { ...state, isLoggedIn: true, isFetching: false, msgError: false };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
        msgError: false,
      };
    default:
      return state;
  }
};

export default authReducer;
