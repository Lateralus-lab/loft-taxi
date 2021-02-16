import { SIGN_IN, SIGN_OUT } from '../actions/types';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLoggedIn: true };
    case SIGN_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
