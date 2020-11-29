import React, { useState } from 'react';

const UserReg = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const hadleSubmitReg = (e) => {
    // Prevent default page reload
    e.preventDefault();
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={hadleSubmitReg}>
        <div className="form-group">
          <input
            value={email}
            type="email"
            placeholder="Your e-mail adress*"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            value={name}
            type="text"
            placeholder="First Name*"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={surname}
            type="text"
            placeholder="Surname*"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Register"
          onClick={() => setCurrentPage('main')}
        />
      </form>
      <div>
        <p>Already have an account?</p>
      </div>
    </div>
  );
};

export default UserReg;
