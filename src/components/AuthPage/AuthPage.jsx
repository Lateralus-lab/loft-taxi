import React, { useState } from 'react';
// Import components
import LoginFormContainer from './LoginForm/LoginFormContainer';
import RegFormContainer from './RegForm/RegFormContainer';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <LoginFormContainer setIsRegistered={setIsRegistered} />
      ) : (
        <RegFormContainer setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default AuthPage;
