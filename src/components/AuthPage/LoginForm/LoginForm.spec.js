import React from 'react';
import LoginForm from './LoginForm';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('LoginForm', () => {
  it('renders corectly', () => {
    const { getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText('Your Email')).toHaveAttribute('name', 'email');
    expect(getByPlaceholderText('Password')).toHaveAttribute(
      'name',
      'password'
    );
  });
});
