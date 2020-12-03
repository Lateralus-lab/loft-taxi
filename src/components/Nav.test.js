import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Nav from './Nav';
import { AuthContext } from '../AuthContext';

describe('on nav link click', () => {
  it('redirects to clicked link', () => {
    const setCurrentPage = jest.fn();
    const { getByText, container } = render(
      <AuthContext.Provider
        value={{
          userSignOut: jest.fn(),
        }}
      >
        <Nav setCurrentPage={setCurrentPage} />
      </AuthContext.Provider>
    );

    fireEvent.click(getByText('Map'));
    expect(setCurrentPage).toHaveBeenCalledWith('main');

    fireEvent.click(getByText('Profile'));
    expect(setCurrentPage).toHaveBeenCalledWith('profile');
  });
});
