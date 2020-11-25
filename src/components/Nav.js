import React from "react";

function Nav({ onLinkClick }) {
  return (
    <div className="nav">
      <ul className="nav-menu">
        <li className="menu-item">
          <a className="menu-link" href="#" onClick={() => onLinkClick("main")}>
            Map
          </a>
        </li>
        <li className="menu-item">
          <a
            className="menu-link"
            href="#"
            onClick={() => onLinkClick("profile")}
          >
            Profile
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#" onClick={() => onLinkClick("auth")}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
