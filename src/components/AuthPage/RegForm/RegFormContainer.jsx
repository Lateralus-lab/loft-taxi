import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/actions';
import RegForm from './RegForm';

const RegFormContainer = ({ setIsRegistered, register }) => {
  return (
    <>
      <RegForm setIsRegistered={setIsRegistered} register={register} />
    </>
  );
};

export default connect(null, { register })(RegFormContainer);