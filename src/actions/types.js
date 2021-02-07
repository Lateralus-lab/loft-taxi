import { createActions } from 'redux-actions';

export const fetchAuthRequest = createActions('FETCH_AUTH_REQUEST');
export const fetchAuthSuccess = createActions('FETCH_AUTH_SUCCESS');
export const fetchAuthFailure = createActions('FETCH_AUTH_FAILURE');
