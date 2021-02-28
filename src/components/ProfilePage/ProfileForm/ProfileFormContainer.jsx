import React from 'react';
import { connect } from 'react-redux';
import { cardData } from '../../../redux/actions/actions';
import ProfileForm from './ProfileForm';

const ProfileFormContainer = () => {
  return (
    <>
      <ProfileForm cardData={cardData} />
    </>
  );
};

export default connect(null, { cardData })(ProfileFormContainer);
