import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { AuthContext } from './AuthContext';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

jest.mock('./components/AuthPage/AuthPage', () => ({
  __esModule: true,
  default: () => <div>Auth</div>,
}));

describe('App', () => {
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
        <App />
      </AuthContext.Provider>
    );
    expect(container.innerHTML).toMatch('Auth');
  });
});
