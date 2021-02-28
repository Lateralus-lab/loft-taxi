import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginForm = ({ isFetching, setIsRegistered, msgError, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.fetchAuthRequest(email, password);
  };

  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(false);
  };

  const authStatus = isFetching ? <div>Loading</div> : null;
  const loginError = msgError ? <div>Wrong email or password</div> : null;

  return (
    <DivCentered>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <Input
            data-testid="email"
            name="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            data-testid="password"
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
        {authStatus}
        {loginError}
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
