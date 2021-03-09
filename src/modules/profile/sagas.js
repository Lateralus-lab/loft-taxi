import { takeLatest, call } from 'redux-saga/effects';
import { SET_PROFILE } from './actions';
import { saveProfile } from '../../redux/api';

function* handleSaveProfileSaga(action) {
  try {
    const response = yield call(saveProfile, action.payload);

    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export function* profileSaga() {
  yield takeLatest(SET_PROFILE, handleSaveProfileSaga);
}
