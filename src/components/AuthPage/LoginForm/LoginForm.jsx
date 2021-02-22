import React, { useState } from 'react';
import { fetch_auth_request } from '../../../redux/actions/actions';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginForm = ({ dispatch, isLoggedIn, setIsRegistered }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetch_auth_request(email, password));
  };

  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(false);
  };

  const loading = isLoggedIn.isFetching ? <div>Loading...</div> : null;
  const errorMsg = isLoggedIn.msgError ? (
    <div>Wrong user or password</div>
  ) : null;

  return (
    <DivCentered>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Sign in
        </Button>
        {loading}
        {errorMsg}
        <div>
          <p>Dont have an account?</p>
          <a href="/" onClick={handleUser}>
            Create account
          </a>
        </div>
      </form>
    </DivCentered>
  );
};

const DivCentered = styled.div`
  margin: 0 auto;
  width: 450px;

  Input {
    min-width: 450px;
    width: 100%;
  }
`;

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
