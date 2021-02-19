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
