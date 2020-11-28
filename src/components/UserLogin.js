import React, { useState } from 'react';

const UserLogin = ({ currentPage, setCurrentPage }) => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitChange = (e) => {
    // Prevent default page reload
    e.preventDefault();

    console.log('Youre logged in!');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmitChange}>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            value={firstName}
            type="email"
            placeholder="Email@mail.com"
            id="email"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input
            value={password}
            id="password"
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Login"
          onClick={() => setCurrentPage('main')}
        />
      </form>
      <div>
        <p>New user?</p>
      </div>
    </div>
  );
};

export default UserLogin;
