import { SET_PROFILE } from './actions';
import { SIGN_OUT } from '../auth/actions';

// eslint-disable-next-line
export default function (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
}
