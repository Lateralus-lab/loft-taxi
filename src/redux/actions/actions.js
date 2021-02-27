import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  SIGN_OUT,
  REGISTER,
  PROFILE_DATA,
} from './types';

export const fetchAuthRequest = (email, password) => ({
  type: FETCH_AUTH_REQUEST,
  payload: { email, password },
});
export const fetchAuthSuccess = () => ({ type: FETCH_AUTH_SUCCESS });
export const fetchAuthFailure = () => ({ type: FETCH_AUTH_FAILURE });
export const signOut = () => ({ type: SIGN_OUT });
export const register = (email, name, surname, password) => ({
  type: REGISTER,
  payload: { email, name, surname, password },
});
export const profileData = (cardHolder, cardNumber, expiryDate, cvc) => ({
  type: PROFILE_DATA,
  payload: { cardHolder, cardNumber, expiryDate, cvc },
});
