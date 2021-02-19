import { AUTHENTICATE, SIGN_IN, SIGN_OUT, SIGN_UP } from './types';

export const signIn = () => ({ type: SIGN_IN });
export const signOut = () => ({ type: SIGN_OUT });
export const signUp = () => ({ type: SIGN_UP });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
