import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

jest.mock('./pages/Main', () => ({
  __esModule: true,
  default: () => <div>Map</div>,
}));

jest.mock('./pages/Profile', () => ({
  __esModule: true,
  default: () => <div>Profile</div>,
}));

jest.mock('./pages/Auth', () => ({
  __esModule: true,
  default: () => <div>Login</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('Login');
  });
});
