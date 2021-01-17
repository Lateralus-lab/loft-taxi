import React from 'react';
// Import components
import LoginForm from './LoginForm/LoginForm';
import RegForm from './RegForm/RegForm';

const AuthPage = (props) => {
  return (
    <div>
      {<LoginForm /> ? (
        <LoginForm setCurrenPage={props.setCurrenPage} />
      ) : (
        <RegForm />
      )}
    </div>
  );
};

export default AuthPage;
