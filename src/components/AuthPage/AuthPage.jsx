import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import components
import LoginForm from './LoginForm/LoginForm';
import RegForm from './RegForm/RegForm';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {isRegistered ? (
        <LoginForm
          isLoggedIn={isLoggedIn}
          dispatch={dispatch}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <RegForm
          isLoggedIn={isLoggedIn}
          dispatch={dispatch}
          setIsRegistered={setIsRegistered}
        />
      )}
    </div>
  );
};

export default AuthPage;
