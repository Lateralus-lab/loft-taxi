import React from 'react';
import ProfileFormContainer from './ProfileForm/ProfileFormContainer';
import CardSaved from './CardSaved/CardSaved';

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <ProfileFormContainer />
      {/* <CardSaved /> */}
    </div>
  );
};

export default ProfilePage;
