import React from 'react';
import UserReg from './UserReg';
import { render } from '@testing-library/react';
import { AuthContext } from '../AuthContext';

describe('UserLogin', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthContext.Provider
        value={{
          userSignIn: jest.fn(),
        }}
      >
        <UserReg />
      </AuthContext.Provider>
    );

    expect(container.innerHTML).toMatch('email');
    expect(container.innerHTML).toMatch('name');
    expect(container.innerHTML).toMatch('Surname');
    expect(container.innerHTML).toMatch('password');
  });
});
