import { fork, all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { registrationSaga } from './registrationSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(registrationSaga)]);
}
