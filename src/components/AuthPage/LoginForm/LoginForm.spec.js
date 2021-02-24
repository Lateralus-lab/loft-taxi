import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

const mockStore = {
  getState: () => ({
    auth: { isLoggedIn: true },
  }),
  subscribe: () => {},
  dispatch: () => {},
};

describe('LoginForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );
    expect(getByPlaceholderText('email')).toHaveAttribute('name', 'email');
  });
});
