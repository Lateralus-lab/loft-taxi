import React, { useState } from 'react';
// Import components
import LoginFormContainer from './LoginForm/LoginFormContainer';
import RegFormContainer from './RegForm/RegFormContainer';
import LogoLarge from '../svg/LogoLarge';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="authpage">
      <div className="authpage__left">
        <div className="brand">
          <div className="brand__item">
            <LogoLarge />
          </div>
        </div>
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
