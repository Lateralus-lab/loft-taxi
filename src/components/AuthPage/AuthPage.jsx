import React, { useState } from 'react';
// Import components
import LoginFormContainer from './LoginForm/LoginFormContainer';
import RegFormContainer from './RegForm/RegFormContainer';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="authpage">
      <div className="authpage__left">
        <h3>Logo</h3>
      </div>
      <div className="authpage__right">
        {isRegistered ? (
          <LoginFormContainer setIsRegistered={setIsRegistered} />
        ) : (
          <RegFormContainer setIsRegistered={setIsRegistered} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
