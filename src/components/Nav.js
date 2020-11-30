import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Nav = ({ setCurrentPage }) => {
  const { userSignOut } = useContext(AuthContext);

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
          <button className="menu-link" onClick={() => userSignOut()}>
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
