import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_AUTH_REQUEST, FETCH_AUTH_SUCCESS } from '../actions/types';
import { fetchAuthSuccess, fetchAuthFailure } from '../actions/actions';
import { serverLogin, serverProfile } from '../api';

function* handleAuthSaga(action) {
  try {
    const response = yield call(serverLogin, action.payload);
    if (response.success) {
      yield put(fetchAuthSuccess(response.token));
    }
  } catch (e) {
    console.log(e);
    yield put(fetchAuthFailure());
  }
}

export function* authSaga() {
  yield takeLatest(FETCH_AUTH_REQUEST, handleAuthSaga);
}
