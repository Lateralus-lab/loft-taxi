import React, { useState } from "react";
import "./App.css";
// Import pages
import Auth from "./pages/Auth";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Auth />
      <Map />
    </div>
  );
}

export default App;
