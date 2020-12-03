import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import AuthContext from '../AuthContext';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthContext.Provider
        value={{
          userSignOut: jest.fn(),
        }}
      >
        <Header />
      </AuthContext.Provider>
    );
    expect(container.firstChild.classList.contains('header')).toBe(true);
  });
});
