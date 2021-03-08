import { takeLatest, call } from 'redux-saga/effects';
import { CARD_DATA } from '../actions/types';
import { serverProfile } from '../api';

function* handleSaveCardData(action) {
  try {
    const response = yield call(serverProfile, action.payload);

    if (response.success) {
      console.log('Card saved');
    }
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export function* paymentSaga() {
  yield takeLatest(CARD_DATA, handleSaveCardData);
}
