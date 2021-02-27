import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    expect(container.innerHTML).toMatch('Profile');
  });
});
