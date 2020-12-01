import React from 'react';
import PropTypes from 'prop-types';
// Import components
import Nav from '../components/Nav';
import Logo from '../components/Logo';

const Header = ({ setCurrentPage }) => {
  return (
    <div className="header">
      <Logo />
      <Nav setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Header;

Header.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
