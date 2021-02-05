import React, { useContext, useState } from 'react';
import './App.css';
import { AuthContext } from './AuthContext';
import { Route, Switch } from 'react-router-dom';
// Import components
import Header from './components/Header/Header';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [currentPage, setCurrenPage] = useState(isLoggedIn ? 'main' : 'auth');
  const header = <Header setCurrenPage={setCurrenPage} />;
  const pages = {
    auth: <AuthPage setCurrenPage={setCurrenPage} />,
    main: <MainPage />,
    profile: <ProfilePage />,
  };

  return (
    <div>
      {isLoggedIn ? header : null}
      {!isLoggedIn ? pages.auth : pages[currentPage]}
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

export default App;
