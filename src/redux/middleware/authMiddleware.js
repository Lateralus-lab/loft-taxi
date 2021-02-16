import { AUTHENTICATE } from '../actions/types';
import { signIn } from '../actions/actions';

const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === AUTHENTICATE) {
    const authData = {
      email: action.payload.email,
      password: action.payload.password,
    };

    const fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    };

    fetch('https://loft-taxi.glitch.me/auth', fetchConfig)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          store.dispatch(signIn(data.token));
          localStorage.setItem('isLoggedIn', 'true');
        } else {
          console.log('failure');
        }
      });
  }

  return result;
};

export default authMiddleware;
