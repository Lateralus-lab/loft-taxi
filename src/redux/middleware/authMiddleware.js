import { AUTHENTICATE } from '../actions/types';
import { signIn } from '../actions/actions';
import { serverLogin } from '../api';

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
    default:
      return result;
  }
};

export default authMiddleware;
