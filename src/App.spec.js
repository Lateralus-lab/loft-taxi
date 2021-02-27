import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

jest.mock('./components/AuthPage/AuthPage', () => ({
  __esModule: true,
  default: () => <div>Auth</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
  });
});
