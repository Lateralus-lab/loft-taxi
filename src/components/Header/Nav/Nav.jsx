import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../modules/auth';
import PropTypes from 'prop-types';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/main">
            Map
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to="/"
            onClick={() => dispatch(signOut())}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  onLogout: PropTypes.func,
};
