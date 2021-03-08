import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthRequest } from '../../../modules/auth';
import LoginForm from './LoginForm';

const LoginFormContainer = ({
  isFetching,
  setIsRegistered,
  msgError,
  fetchAuthRequest,
}) => {
  return (
    <>
      <LoginForm
        isFetching={isFetching}
        setIsRegistered={setIsRegistered}
        msgError={msgError}
        fetchAuthRequest={fetchAuthRequest}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  msgError: state.auth.msgError,
});

export default connect(mapStateToProps, { fetchAuthRequest })(
  LoginFormContainer
);
