import { fork, all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { registrationSaga } from './registration';
import { profileSaga } from './profile';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(registrationSaga), fork(profileSaga)]);
}

// fork(profileSaga)
