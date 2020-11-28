import React, { useState } from 'react';
import './App.css';
// Import pages
import Auth from './pages/Auth';
import Main from './pages/Main';
import Profile from './pages/Profile';
// Import components
import Header from './components/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('auth');
  const header = <Header setCurrentPage={setCurrentPage} />;
  const pages = {
    auth: <Auth currentPage={currentPage} setCurrentPage={setCurrentPage} />,
    profile: <Profile />,
    main: <Main />,
  };

  return (
    <div className="App">
      {currentPage !== 'auth' && <div>{header}</div>}
      {pages[currentPage]}
    </div>
  );
};

export default App;
