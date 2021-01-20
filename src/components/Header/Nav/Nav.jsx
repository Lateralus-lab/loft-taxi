import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../AuthContext';

const Nav = (props) => {
  const { onLogout } = useContext(AuthContext);

  return (
    <NavStyled>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.setCurrenPage('main');
              }}
            >
              Map
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.setCurrenPage('profile');
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button onClick={() => onLogout()}>Sign out</button>
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
