import { AUTHENTICATE, PROFILE_DATA, REGISTER } from '../actions/types';
import { signIn } from '../actions/actions';
import { serverLogin, serverProfile, serverRegister } from '../api';

const authMiddleware = (store) => (next) => async (action) => {
  const result = next(action);

  switch (action.type) {
    case AUTHENTICATE: {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password);

      if (data.success) {
        store.dispatch(signIn(data.token));
      }
      break;
    }
    case REGISTER: {
      const { email, name, surname, password } = action.payload;
      const data = await serverRegister(email, name, surname, password);

      if (data.success) {
        store.dispatch(signIn(data.token));
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
      return result;
  }
};

export default authMiddleware;
