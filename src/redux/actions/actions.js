import { AUTHENTICATE, SIGN_IN, SIGN_OUT, SIGN_UP } from './types';

export const signIn = () => ({ type: SIGN_IN });
export const signOut = () => ({ type: SIGN_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const signUp = (email, name, surname, password) => ({
  type: SIGN_UP,
  payload: { email, name, surname, password },
});
