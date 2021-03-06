import React from 'react';
// Import components
import Nav from './Nav/Nav';
import LogoSmall from '../svg/LogoSmall';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <LogoSmall />
      </div>
      <div className="header__menu">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
