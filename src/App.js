import React, { useState } from 'react';
import './App.css';
// Import components
import Header from './components/Header/Header';
import AuthPage from './components/AuthPage/AuthPage';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/MainPage/Profile';

const App = () => {
  const [currentPage, setCurrenPage] = useState('auth');

  const pages = {
    auth: <AuthPage setCurrenPage={setCurrenPage} />,
    main: <MainPage />,
    profile: <Profile />,
  };

  return (
    <div>
      {currentPage !== 'auth' && <Header setCurrenPage={setCurrenPage} />}
      {pages[currentPage]}
    </div>
  );
};

export default App;
