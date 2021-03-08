export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const fetchAuthRequest = (email, password) => ({
  type: FETCH_AUTH_REQUEST,
  payload: { email, password },
});
export const fetchAuthSuccess = () => ({ type: FETCH_AUTH_SUCCESS });
export const fetchAuthFailure = () => ({ type: FETCH_AUTH_FAILURE });
export const signOut = () => ({ type: SIGN_OUT });
