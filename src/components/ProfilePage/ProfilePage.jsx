import React from 'react';
import { Typography } from '@material-ui/core';
import ProfileForm from './ProfileForm/ProfileForm';

const ProfilePage = () => {
  return (
    <div>
      <div>
        <Typography className="form-title" variant="h4">
          Profile
        </Typography>
        <div>Please fill out the form</div>
      </div>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
