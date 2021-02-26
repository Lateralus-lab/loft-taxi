import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Nav from './Nav';

describe('Nav', () => {
  it('it renders correctly with redux', () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Nav />
        </Provider>
      </Router>
    );

    fireEvent.click(screen.getByText('Map'));
    expect(container.innerHTML).toMatch('Map');
    fireEvent.click(screen.getByText('Profile'));
    expect(container.innerHTML).toMatch('Profile');
    expect(container.innerHTML).toMatch('Sign out');
    expect(screen.getByText('Sign out')).toBeTruthy();
  });
});
