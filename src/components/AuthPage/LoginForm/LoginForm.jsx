import React, { useState } from 'react';
import { fetch_auth_request } from '../../../redux/actions/actions';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginForm = ({ dispatch, setIsRegistered }) => {
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

  return (
    <DivCentered>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          id="signup-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign in
        </Button>
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
