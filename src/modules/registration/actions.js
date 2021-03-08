export const REGISTER = 'REGISTER';

export const register = (email, name, surname, password) => ({
  type: REGISTER,
  payload: { email, name, surname, password },
});
