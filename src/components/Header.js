import React from 'react';
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
