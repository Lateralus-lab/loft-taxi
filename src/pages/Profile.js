import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { userSignOut } = useContext(AuthContext);

  return (
    <div className="profile">
      {isLoggedIn ? <div>Profile</div> : userSignOut()}
    </div>
  );
};

export default Profile;
