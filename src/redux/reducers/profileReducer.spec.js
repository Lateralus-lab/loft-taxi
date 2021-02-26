import { PROFILE_DATA } from '../actions/types';
import profileReducer, { initialState } from './profileReducer';

describe('card details', () => {
  it('PROFILE_DATA', () => {
    const action = {
      type: PROFILE_DATA,
      payload: {
        cardHolder: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
      },
    };
    expect(profileReducer(initialState, action)).toEqual({
      cardHolder: action.payload.cardHolder,
      cardNumber: action.payload.cardNumber,
      expiryDate: action.payload.expiryDate,
      cvc: action.payload.cvc,
    });
  });
});
