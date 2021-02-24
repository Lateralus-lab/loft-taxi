import { FETCH_AUTH_REQUEST, PROFILE_DATA, REGISTER } from '../actions/types';
import { fetch_auth_success, fetch_auth_failure } from '../actions/actions';
import { serverLogin, serverProfile, serverRegister } from '../api';

const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST: {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password);

      if (data.success) {
        store.dispatch(fetch_auth_success(data.token));
      } else if (data.error) store.dispatch(fetch_auth_failure());
      break;
    }
    case REGISTER: {
      const { email, name, surname, password } = action.payload;
      const data = await serverRegister(email, name, surname, password);

      if (data.success) {
        store.dispatch(fetch_auth_success(data.token));
      }
      break;
    }
    case PROFILE_DATA:
      const { cardHolder, cardNumber, expiryDate, cvc } = action.payload;
      const data = await serverProfile(cardHolder, cardNumber, expiryDate, cvc);

      if (data.success) {
        console.log('PROFILE_DATA', data.success);
      }
      break;
    default:
      return next(action);
  }
};

export default authMiddleware;
