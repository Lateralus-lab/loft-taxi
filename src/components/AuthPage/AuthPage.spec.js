import React from 'react';
import { render } from '@testing-library/react';
import { AuthContext } from '../../AuthContext';
import AuthPage from './AuthPage';

describe('AuthPage', () => {
  it('renders correctly', () => {
    render(
      <AuthContext.Provider
        value={{
          onLogin: jest.fn(),
        }}
      >
        <AuthPage />
      </AuthContext.Provider>
    );
  });
});
