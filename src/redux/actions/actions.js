import {
  AUTHENTICATE,
  SIGN_IN,
  SIGN_OUT,
  REGISTER,
  PROFILE_DATA,
} from './types';

export const signIn = () => ({ type: SIGN_IN });
export const signOut = () => ({ type: SIGN_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const register = (email, name, surname, password) => ({
  type: REGISTER,
  payload: { email, name, surname, password },
});
export const profileData = (cardHolder, cardNumber, expiryDate, cvc) => ({
  type: PROFILE_DATA,
  payload: { cardHolder, cardNumber, expiryDate, cvc },
});
