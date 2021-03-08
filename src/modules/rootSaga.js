import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { registrationSaga } from './registration';
// import { paymentSaga } from './paymentSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(registrationSaga)]);
}
