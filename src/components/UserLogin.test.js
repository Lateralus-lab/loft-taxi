import React from 'react';
import UserLogin from './UserLogin';
import { render } from '@testing-library/react';
import { AuthContext } from '../AuthContext';

describe('UserLogin', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthContext.Provider
        value={{
          userSignIn: jest.fn(),
        }}
      >
        <UserLogin />
      </AuthContext.Provider>
    );

    expect(container.innerHTML).toMatch('Email');
    expect(container.innerHTML).toMatch('password');
  });
});
