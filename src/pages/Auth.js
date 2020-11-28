import React, { useState } from 'react';
// Import components
import UserLogin from '../components/UserLogin';
import UserReg from '../components/UserReg';

const Auth = ({ currentPage, setCurrentPage }) => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <UserLogin currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ) : (
        <UserReg currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Sign up' : 'Sign up'}
      </button>
    </div>
  );
};

export default Auth;
