import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
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
            name="email"
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__group">
          <TextField
            className="input"
            data-testid="password"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="button button--form"
          id="signup-button"
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
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
