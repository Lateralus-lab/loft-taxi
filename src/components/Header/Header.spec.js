import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { AuthContext } from '../../AuthContext';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthContext.Provider
        value={{
          isLoggedI: jest.fn(),
          setIsLoggedIn: jest.fn(),
          onLogin: jest.fn(),
          onLogout: jest.fn(),
        }}
      >
        <Header />
      </AuthContext.Provider>
    );
    expect(container.innerHTML).toMatch('LoftTaxi');
  });
});
