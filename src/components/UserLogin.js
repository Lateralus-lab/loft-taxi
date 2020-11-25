import React, { useState } from "react";

function UserLogin({ isLoggedIn, seIsLoggedIn }) {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitChange = (e) => {
    // Prevent default page reload
    e.preventDefault();

    console.log("Youre logged in!");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmitChange}>
        <div className="form-group">
          <label>Your email</label>
          <input
            value={firstName}
            type="email"
            placeholder="Email@mail.com"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Your password</label>
          <input
            value={password}
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Login"
          onClick={() => seIsLoggedIn(!isLoggedIn)}
        />
      </form>
      <div>
        <p>New user?</p>
      </div>
    </div>
  );
}

export default UserLogin;
