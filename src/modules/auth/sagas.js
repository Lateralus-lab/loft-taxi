import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_AUTH_REQUEST,
  fetchAuthSuccess,
  fetchAuthFailure,
} from './actions';
import { serverLogin } from '../../redux/api';

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
