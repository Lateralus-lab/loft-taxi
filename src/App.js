import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './assets/styles/style.scss';
// Import components
import Header from './components/Header/Header';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (isLoggedIn) {
        history.push('/main');
      } else {
        history.push('/');
      }
    }
  });

  return (
    <div>
      {isLoggedIn ? <Header /> : null}
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <PrivateRoute path="/main" component={MainPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

export default App;
