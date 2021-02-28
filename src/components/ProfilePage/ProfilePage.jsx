import React from 'react';
import { Typography } from '@material-ui/core';
import ProfileFormContainer from './ProfileForm/ProfileFormContainer';

const ProfilePage = () => {
  return (
    <div>
      <div>
        <Typography className="form-title" variant="h4">
          Profile
        </Typography>
        <div>Please fill out the form</div>
      </div>
      <ProfileFormContainer />
    </div>
  );
};

export default ProfilePage;
