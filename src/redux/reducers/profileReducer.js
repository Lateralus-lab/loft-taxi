import { CARD_DATA } from '../actions/types';

export const initialState = {
  cardHolder: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_DATA:
      return {
        ...state,
        cardHolder: action.payload.cardHolder,
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };
    default:
      return state;
  }
};

export default profileReducer;
