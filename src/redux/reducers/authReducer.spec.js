import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  SIGN_OUT,
} from '../actions/types';
import authReducer, { initialState } from './authReducer';

describe('authorization', () => {
  it('FETCH_AUTH_REQUEST', () => {
    const action = {
      type: FETCH_AUTH_REQUEST,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false,
      isFetching: true,
      msgError: false,
    });
  });
  it('FETCH_AUTH_SUCCESS', () => {
    const action = {
      type: FETCH_AUTH_SUCCESS,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: true,
      isFetching: false,
      msgError: false,
    });
  });
  it('FETCH_AUTH_FAILURE', () => {
    const action = {
      type: FETCH_AUTH_FAILURE,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false,
      isFetching: false,
      msgError: true,
    });
  });
  it('SIGN_OUT', () => {
    const action = {
      type: SIGN_OUT,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false,
    });
  });
});
