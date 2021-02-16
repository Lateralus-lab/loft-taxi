import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/actions/actions';
import PropTypes from 'prop-types';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <NavStyled>
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
    </NavStyled>
  );
};

const NavStyled = styled.div`
  ul {
    display: flex;
    align-items: center;
    max-width: 450px;
    width: 100%;
  }

  li {
    margin-left: 20px;
    text-decoration: none;
    color: #000000;
  }
`;

export default Nav;

Nav.propTypes = {
  onLogout: PropTypes.func,
};
