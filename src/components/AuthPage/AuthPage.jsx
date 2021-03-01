import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
// Import components
import LoginFormContainer from './LoginForm/LoginFormContainer';
import RegFormContainer from './RegForm/RegFormContainer';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>Logo</h3>
      </div>
      <div className={styles.right}>
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
