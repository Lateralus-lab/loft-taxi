import React from 'react';
import LoginForm from './LoginForm';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthContext } from '../../../AuthContext';

describe('LoginForm', () => {
  it('renders corectly', () => {
    const { getByPlaceholderText } = render(
      <AuthContext.Provider
        value={{
          isLoggedI: jest.fn(),
          setIsLoggedIn: jest.fn(),
          onLogin: jest.fn(),
          onLogout: jest.fn(),
        }}
      >
        <LoginForm />
      </AuthContext.Provider>
    );
    expect(getByPlaceholderText('Your Email')).toHaveAttribute('name', 'email');
    expect(getByPlaceholderText('Password')).toHaveAttribute(
      'name',
      'password'
    );
  });
});
