import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { editProfile } from '../../../modules/profile/actions';

const ProfileFormContainer = ({ token }) => {
  return (
    <>
      <ProfileForm token={token} editProfile={editProfile} />
    </>
  );
};

const mapStateToProps = (state) => ({ token: state.auth.token });

export default connect(mapStateToProps, { editProfile })(ProfileFormContainer);
