import React from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';

const RegForm = (props) => {
  const UserReg = (e) => {
    e.preventDefault();

    props.setIsRegistered(true);
  };

  return (
    <DivCentered>
      <form>
        <div>
          <h3>Register</h3>
        </div>
        <div>
          <Input name="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <Input name="name" type="text" placeholder="Name" />
          <Input name="name" type="text" placeholder="Surname" />
        </div>
        <div>
          <Input name="password" type="password" placeholder="Password" />
        </div>
        <Button variant="contained" color="primary">
          Register
        </Button>
        <div>
          <p>Already have an acount?</p>
          <a href="/" onClick={UserReg}>
            Login
          </a>
        </div>
      </form>
    </DivCentered>
  );
};

const DivCentered = styled.div`
  margin: 0 auto;
  width: 450px;
`;

export default RegForm;
