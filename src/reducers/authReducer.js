import {
  fetchAuthFailure,
  fetchAuthRequest,
  fetchAuthSuccess,
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchAuthRequest.toString(): {
      return {
        ...state,
        isLoading: true,
      };
    }
    case fetchAuthSuccess.toString(): {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case fetchAuthFailure.toString(): {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
