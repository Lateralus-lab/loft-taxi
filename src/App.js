import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// Import components
// import Header from './components/Header/Header';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

export default App;
