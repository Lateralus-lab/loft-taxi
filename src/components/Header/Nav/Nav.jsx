import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/actions/actions';
import PropTypes from 'prop-types';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/main">Map</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={() => dispatch(signOut())}>
              Sign out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

Nav.propTypes = {
  onLogout: PropTypes.func,
};
