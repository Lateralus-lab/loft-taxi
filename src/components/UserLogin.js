import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

const UserLogin = () => {
  const { userSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('guest@email.com');
  const [password, setPassword] = useState('123');
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmitChange = (e) => {
    e.preventDefault();

    userSignIn(email, password, msgError);
  };

  const msgError = () => {
    setErrorMessage(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmitChange}>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input
            value={email}
            type="email"
            placeholder="Email@mail.com"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
        {errorMessage ? (
          <div>The username or password you entered is incorrect</div>
        ) : (
          ''
        )}
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>New user?</p>
      </div>
    </div>
  );
};

export default UserLogin;
