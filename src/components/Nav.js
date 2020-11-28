import React from 'react';

const Nav = ({ setCurrentPage }) => {
  return (
    <div className="nav">
      <ul className="nav-menu">
        <li className="menu-item">
          <button className="menu-link" onClick={() => setCurrentPage('main')}>
            Map
          </button>
        </li>
        <li className="menu-item">
          <button
            className="menu-link"
            onClick={() => setCurrentPage('profile')}
          >
            Profile
          </button>
        </li>
        <li className="menu-item">
          <button className="menu-link" onClick={() => setCurrentPage('auth')}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
