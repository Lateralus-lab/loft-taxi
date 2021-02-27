import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProfileForm from './ProfileForm';

describe('ProfileForm', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    render(
      <Provider store={mockStore}>
        <ProfileForm />
      </Provider>
    );

    expect(screen.getByTestId('name')).toBeTruthy();
    expect(screen.getByTestId('card-number')).toBeTruthy();
    expect(screen.getByTestId('expiry')).toBeTruthy();
    expect(screen.getByTestId('cvc')).toBeTruthy();
    expect(screen.getByTestId('save-button')).toBeTruthy();
  });
});
