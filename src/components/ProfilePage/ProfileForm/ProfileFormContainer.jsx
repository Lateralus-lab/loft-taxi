import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { editProfile } from '../../../modules/profile/actions';

const ProfileFormContainer = (props) => {
  console.log(props);

  return (
    <>
      <ProfileForm editProfile={editProfile} />
    </>
  );
};

const mapStateToProps = (state) => ({ token: state.auth.token });

export default connect(mapStateToProps, { editProfile })(ProfileFormContainer);
