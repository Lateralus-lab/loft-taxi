import React, { useState } from "react";
// Import components
import UserLogin from "../components/UserLogin";
import UserReg from "../components/UserReg";

function Auth() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? <UserLogin /> : <UserReg />}
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? "Sign in" : "Sign up"}
      </button>
    </div>
  );
}

export default Auth;
