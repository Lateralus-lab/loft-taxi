import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => ({ auth: true }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const { getByText, getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <LoginForm />
      </Provider>
    );

    expect(getByPlaceholderText('Your Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    fireEvent.click(getByText('Sign in'));
  });
});
