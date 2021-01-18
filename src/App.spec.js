import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

jest.mock('./components/AuthPage/AuthPage', () => ({
  __esModule: true,
  default: () => <div>Auth</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('Auth');
  });
});
