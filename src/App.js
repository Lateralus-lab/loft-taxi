import React, { useState } from 'react';
import './App.css';
import { AuthContext } from './AuthContext';
// Import pages
import Auth from './pages/Auth';
import Main from './pages/Main';
import Profile from './pages/Profile';
// Import components
import Header from './components/Header';

const App = () => {
  // Default user
  const guestUser = 'guest@email.com';
  const guestPassword = '123';

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(isLoggedIn ? 'main' : 'auth');
  const header = <Header setCurrentPage={setCurrentPage} />;
  const pages = {
    auth: <Auth />,
    profile: <Profile />,
    main: <Main />,
  };

  const userSignIn = (email, password, msgError) => {
    if (email === guestUser && password === guestPassword) {
      setIsLoggedIn(true);
      setCurrentPage('main');
    } else {
      msgError();
    }
  };

  const userSignOut = () => {
    setIsLoggedIn(false);
    setCurrentPage('auth');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userSignIn,
        userSignOut,
      }}
    >
      <div className="App">
        {currentPage !== 'auth' && <div>{header}</div>}
        {!isLoggedIn ? pages.auth : pages[currentPage]}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
