import { createAction } from 'redux-actions';

export const GET_LOGGED_OUT = 'GET_LOGGED_OUT';
export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';

export const getLoggedOut = createAction(GET_LOGGED_OUT);
export const fetchAuthRequest = createAction(FETCH_AUTH_REQUEST);
export const fetchAuthSuccess = createAction(FETCH_AUTH_SUCCESS);
export const fetchAuthFailure = createAction(FETCH_AUTH_FAILURE);
