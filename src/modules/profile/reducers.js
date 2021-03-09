import { EDIT_PROFILE } from './actions';

const initialState = {
  cardHolder: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}
