import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginForm = ({ setCurrenPage, setIsRegistered }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const UserReg = (e) => {
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
          Login
        </Button>
        {msgError ? <div>Your email or password is incorrect</div> : null}
        <div>
          <p>Dont have an account?</p>
          <a href="/" onClick={UserReg}>
            Register
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
