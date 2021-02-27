import React from 'react';
import MainPage from './MainPage';
import { render } from '@testing-library/react';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('MainPage', () => {
  it('renders correctly', () => {
    render(<MainPage />);
  });
});
