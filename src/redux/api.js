const fetchConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetchData = (dataUrl, params) =>
  fetch(dataUrl, params)
    .then((res) => res.json())
    .catch((e) => console.error(e));

export const serverLogin = async (email, password) => {
  const authData = {
    email: email,
    password: password,
  };
  const params = {
    ...fetchConfig,
    body: JSON.stringify(authData),
  };

  return fetchData('https://loft-taxi.glitch.me/auth', params);
};

export const serverRegister = async (email, name, surname, password) => {
  const regData = {
    email: email,
    name: name,
    surname: surname,
    password: password,
  };
  const params = {
    ...fetchConfig,
    body: JSON.stringify(regData),
  };

  return fetchData('https://loft-taxi.glitch.me/register', params);
};

export const serverProfile = async (
  cardHolder,
  cardNumber,
  expiryDate,
  cvc
) => {
  const profileData = {
    cardHolder: cardHolder,
    cardNumber: cardNumber,
    expiryDate: expiryDate,
    cvc: cvc,
  };
  const params = {
    ...fetchConfig,
    body: JSON.stringify(profileData),
  };

  return fetchData('https://loft-taxi.glitch.me/card', params);
};
