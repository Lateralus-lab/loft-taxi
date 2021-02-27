import React from 'react';
import styled from 'styled-components';
// Import components
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <HeaderStyled>
      <h3>LoftTaxi</h3>
      <Nav />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export default Header;
