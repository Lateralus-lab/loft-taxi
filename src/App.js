import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// Import pages
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, seIsLoggedIn] = useState(false);
  const [page, setPage] = useState("auth");
  const header = <Header onLinkClick={(pageName) => setPage(pageName)} />;
  const pages = {
    auth: <Auth />,
    main: <Main />,
    profile: <Profile />,
  };

  return (
    <div className="App">
      {isLoggedIn ? <Main /> : <Auth seIsLoggedIn={seIsLoggedIn} />}
    </div>
  );
}

export default App;
