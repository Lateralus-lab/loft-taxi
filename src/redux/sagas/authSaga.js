import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_AUTH_REQUEST } from '../actions/types';
import { fetchAuthSuccess, fetchAuthFailure } from '../actions/actions';
import { serverLogin } from '../api';

function* handleAuthSaga(action) {
  try {
    const response = yield call(serverLogin, action.payload);

    if (response.success) {
      yield put(fetchAuthSuccess(response.token));
    } else if (response.error) {
      yield put(fetchAuthFailure());
    }
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(FETCH_AUTH_REQUEST, handleAuthSaga);
}
