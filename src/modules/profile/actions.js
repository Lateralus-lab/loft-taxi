export const EDIT_PROFILE = 'EDIT_PROFILE';
export const REMOVE_PROFILE = 'EDIT_PROFILE';

export const editProfile = (cardHolder, cardNumber, expiryDate, cvc) => ({
  type: EDIT_PROFILE,
  payload: { cardHolder, cardNumber, expiryDate, cvc },
});
