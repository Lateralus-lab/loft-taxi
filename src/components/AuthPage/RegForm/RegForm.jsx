import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import PropTypes from 'prop-types';

const RegForm = ({ setIsRegistered, register }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    register(email, name, surname, password);
  };

  const handleUser = (e) => {
    e.preventDefault();

    setIsRegistered(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Register</h3>
        </div>
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="surname"
            name="name"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          id="signup-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign up
        </Button>
        <div>
          <p>Already have an account?</p>
          <a href="/" onClick={handleUser}>
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegForm;

RegForm.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  password: PropTypes.string,
};
