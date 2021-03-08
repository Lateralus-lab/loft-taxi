import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { editProfile } from '../../../modules/profile/actions';

const ProfileFormContainer = () => {
  return (
    <>
      <ProfileForm editProfile={editProfile} />
    </>
  );
};

const mapStateToProps = (state) => ({ profile: state.profile });

export default connect(mapStateToProps, { editProfile })(ProfileFormContainer);
