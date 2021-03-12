import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { registrationSaga } from './registration';
import { profileSaga } from './profile';
import { addressListSaga } from './addressList';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(registrationSaga),
    fork(profileSaga),
    fork(addressListSaga),
  ]);
}
