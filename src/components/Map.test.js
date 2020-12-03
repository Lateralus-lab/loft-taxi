import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';
import Map from './Map';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('Map', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Map />);
    expect(mapboxgl.Map).toHaveBeenCalledWith({
      container: getByTestId('map'),
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-0.118092, 51.509865],
      zoom: 10,
    });
  });
});
