import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const validEmail = 'test@test.com';
  const validPass = '123123';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = (email, password, setMsgError) => {
    if (email === validEmail && password === validPass) {
      setIsLoggedIn(true);
      return true;
    } else {
      setMsgError(true);
      setIsLoggedIn(false);
    }
    return false;
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, onLogin, onLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
