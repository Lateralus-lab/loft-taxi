import React from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../../modules/profile/actions';
import ProfileForm from './ProfileForm';

const ProfileFormContainer = ({ token, setProfile }) => {
  return (
    <>
      <ProfileForm token={token} setProfile={setProfile} />
    </>
  );
};

const mapStateToProps = (state) => ({ token: state.auth.token });

export default connect(mapStateToProps, { setProfile })(ProfileFormContainer);
