import React from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';

const LoginForm = (props) => {
  return (
    <DivCentered>
      <form>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <Input name="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <Input name="password" type="password" placeholder="Password" />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.setCurrenPage('main');
          }}
        >
          Login
        </Button>
        <div>
          <p>Dont have an account?</p>
          <a href="/">Register</a>
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
