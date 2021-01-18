import React from 'react';
import MainPage from './MainPage';
import { render } from '@testing-library/react';

describe('MainPage', () => {
  it('renders correctly', () => {
    const { container } = render(<MainPage />);
    expect(container.innerHTML).toMatch('MainPage');
  });
});
