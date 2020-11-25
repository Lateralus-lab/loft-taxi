import React from "react";
// Import components
import Nav from "../components/Nav";
import Logo from "../components/Logo";

function Header({ onLinkClick }) {
  return (
    <div className="header">
      <Logo />
      <Nav onLinkClick={onLinkClick} />
    </div>
  );
}

export default Header;
