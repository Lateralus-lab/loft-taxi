import React, { useState } from 'react';
// Import components
import LoginForm from './LoginForm/LoginForm';
import RegForm from './RegForm/RegForm';

const AuthPage = (props) => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <LoginForm
          setCurrenPage={props.setCurrenPage}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <RegForm setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default AuthPage;
