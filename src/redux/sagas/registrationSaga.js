import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAuthFailure, fetchAuthSuccess } from '../actions/actions';
import { REGISTER } from '../actions/types';
import { serverRegister } from '../api';

function* handleRegSaga(action) {
  try {
    const register = yield call(serverRegister, action.payload);

    console.log(register);
    if (register.success) {
      yield put(fetchAuthSuccess());
    } else if (register.error) yield put(fetchAuthFailure());
  } catch (e) {
    console.log(e);
  }
}

export function* registrationSaga() {
  yield takeLatest(REGISTER, handleRegSaga);
}
