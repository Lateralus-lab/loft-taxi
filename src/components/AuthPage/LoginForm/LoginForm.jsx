import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
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

  const authStatus = isFetching ? (
    <Alert variant="outlined" severity="warning">
      Loading...
    </Alert>
  ) : null;
  const loginError = msgError ? (
    <Alert variant="outlined" severity="error">
      Wrong email or password
    </Alert>
  ) : null;

  return (
    <div className="loginform">
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography className="form__title" variant="h4">
          Login
        </Typography>
        <div className="input__group">
          <TextField
            className="input"
            data-testid="email"
            id="standard-basic"
            name="email"
            type="email"
            required
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__group">
          <TextField
            className="input"
            data-testid="password"
            id="standard-basic"
            name="password"
            type="password"
            required
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {authStatus}
        {loginError}
        <Button
          className="button button--form"
          id="signup-button"
          type="submit"
        >
          Sign in
        </Button>
        <div>
          <p>Dont have an account?</p>
          <a className="form__link" href="/" onClick={handleUser}>
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
