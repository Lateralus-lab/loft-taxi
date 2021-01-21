import React from 'react';
import { render, fireEvent, getByText, screen } from '@testing-library/react';
import { AuthContext } from '../../../AuthContext';
import Nav from './Nav';

describe('Nav', () => {
  it('redirects on page click', () => {
    const setCurrenPage = jest.fn();
    const { container, getByText } = render(
      <AuthContext.Provider
        value={{
          onLogout: jest.fn(),
        }}
      >
        <Nav setCurrenPage={setCurrenPage} />
      </AuthContext.Provider>
    );

    fireEvent.click(screen.getByText('Map'));
    expect(setCurrenPage).toHaveBeenCalledWith('main');

    fireEvent.click(screen.getByText('Profile'));
    expect(setCurrenPage).toHaveBeenCalledWith('profile');

    expect(container.innerHTML).toMatch('Sign out');
    expect(screen.getByText('Sign out')).toBeTruthy();
  });
});
