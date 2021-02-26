import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegForm from './RegForm';

describe('RegForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<RegForm />);
    expect(getByPlaceholderText('Your Email')).toHaveAttribute('name', 'email');
    expect(getByPlaceholderText('Name')).toHaveAttribute('name', 'name');
    expect(getByPlaceholderText('Surname')).toHaveAttribute('name', 'name');
    expect(getByPlaceholderText('Password')).toHaveAttribute(
      'name',
      'password'
    );
  });
});
