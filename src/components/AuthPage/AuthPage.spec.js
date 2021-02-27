import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import AuthPage from './AuthPage';

describe('AuthPage', () => {
  it('renders correctly with redux', () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
  });
});
