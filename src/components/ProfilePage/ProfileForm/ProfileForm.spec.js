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

    const { getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <ProfileForm />
      </Provider>
    );

    expect(screen.getByTestId('name')).toHaveAttribute('required');
  });
});
