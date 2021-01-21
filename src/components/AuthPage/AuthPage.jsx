import React, { useState } from 'react';
// Import components
import LoginForm from './LoginForm/LoginForm';
import RegForm from './RegForm/RegForm';

const AuthPage = ({ setCurrenPage }) => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <LoginForm
          setCurrenPage={setCurrenPage}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <RegForm setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default AuthPage;
