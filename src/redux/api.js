const API_URL = `https://loft-taxi.glitch.me`;

const fetchConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetchData = (dataUrl, params) =>
  fetch(dataUrl, params)
    .then((res) => res.json())
    .catch((e) => console.log('Could not fetch', e));

export const serverLogin = async (payload) => {
  const params = {
    ...fetchConfig,
    body: JSON.stringify(payload),
  };

  return await fetchData(`${API_URL}/auth`, params);
};

export const serverRegister = async ({ email, name, surname, password }) => {
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

  return await fetchData(`${API_URL}/register`, params);
};

export const serverCard = async ({
  cardHolder,
  cardNumber,
  expiryDate,
  cvc,
}) => {
  const cardData = {
    cardHolder: cardHolder,
    cardNumber: cardNumber,
    expiryDate: expiryDate,
    cvc: cvc,
  };

  console.log(cardData);
  const params = {
    ...fetchConfig,
    body: JSON.stringify(cardData),
  };

  return await fetchData(`${API_URL}/card`, params);
};

export const getServerCard = async (token) => {
  return await fetchData(`${API_URL}/card?token=${token}`, {});
};
