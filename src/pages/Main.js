import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
// Import components
import Map from '../components/Map';

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { userSignOut } = useContext(AuthContext);

  return (
    <div>
      <div>Main</div>
      {isLoggedIn ? <Map /> : userSignOut()}
    </div>
  );
};

export default Main;
