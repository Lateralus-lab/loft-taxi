import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
// import { getProfile } from '../../../modules/auth';

const ProfileFormContainer = () => {
  return (
    <>
      <ProfileForm />
    </>
  );
};

export default connect(null, null)(ProfileFormContainer);
