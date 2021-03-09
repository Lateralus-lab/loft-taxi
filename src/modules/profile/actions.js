export const SET_PROFILE = 'SET_PROFILE';

export const setProfile = (cardHolder, cardNumber, expiryDate, cvc, token) => ({
  type: SET_PROFILE,
  payload: { cardHolder, cardNumber, expiryDate, cvc, token },
});
