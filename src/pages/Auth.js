import React, { useState } from "react";
// Import components
import UserLogin from "../components/UserLogin";
import UserReg from "../components/UserReg";

function Auth({ isLoggedIn, seIsLoggedIn }) {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <UserLogin isLoggedIn={isLoggedIn} seIsLoggedIn={seIsLoggedIn} />
      ) : (
        <UserReg />
      )}
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Sign up" : "Sign up"}
      </button>
    </div>
  );
}

export default Auth;
