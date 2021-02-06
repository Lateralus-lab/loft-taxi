import { LOG_IN, LOG_OUT } from '../actions/types';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true };
    }
    case LOG_OUT: {
      return { isLoggedIn: false };
    }
    default:
      return state;
  }
};

export default authReducer;
