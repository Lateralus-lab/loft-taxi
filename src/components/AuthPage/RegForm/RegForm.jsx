import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
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
    <div className="form__wrapper">
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <Typography className="form__title" variant="h4">
            Register
          </Typography>
        </div>
        <div className="input__group">
          <TextField
            className="input"
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__group input__group--double">
          <TextField
            className="input input--small"
            id="name"
            name="name"
            type="text"
            label="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="input input--small"
            id="surname"
            name="name"
            type="text"
            label="Surname"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="input"
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="button button--form"
          id="signup-button"
          type="submit"
        >
          Sign up
        </Button>
        <div>
          <p>Already have an account?</p>
          <a className="form__link" href="/" onClick={handleUser}>
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
