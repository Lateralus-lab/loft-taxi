import React from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RegForm = ({ setIsRegistered }) => {
  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(true);
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
          Sign up
        </Button>
        <div>
          <p>Already have an account?</p>
          <a href="/" onClick={handleUser}>
            Sign in
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

RegForm.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  password: PropTypes.string,
};
