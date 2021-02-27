import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('LoftTaxi');
  });
});
