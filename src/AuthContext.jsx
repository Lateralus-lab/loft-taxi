import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const validEmail = 'test@test.com';
  const validPass = '123123';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmitLogin = (email, password) => {
    if (email !== validEmail || password !== validPass) {
      setIsLoggedIn(true);
      console.log('Right!');
    } else {
      console.log('Wrong!');
    }
  };

  const onSubmitLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, onSubmitLogin, onSubmitLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
