import React, { useState } from "react";

function UserReg() {
  const [yourEmail, setYourEmail] = useState("");
  const [yourName, setYourName] = useState("");
  const [yourSurname, setYourSurname] = useState("");
  const [yourPassword, setYourPassword] = useState("");

  const hadleSubmitReg = (e) => {
    // Prevent default page reload
    e.preventDefault();

    console.log("Youre registed user!");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={hadleSubmitReg}>
        <div className="form-group">
          <input
            value={yourEmail}
            type="email"
            placeholder="Your e-mail adress*"
            onChange={(e) => setYourEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            value={yourName}
            type="text"
            placeholder="First Name*"
            onChange={(e) => setYourName(e.target.value)}
          />
          <input
            value={yourSurname}
            type="text"
            placeholder="Surname*"
            onChange={(e) => setYourSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            value={yourPassword}
            type="password"
            placeholder="*********"
            onChange={(e) => setYourPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Register" onSubmit={hadleSubmitReg} />
      </form>
      <div>
        <p>Already have an account?</p>
      </div>
    </div>
  );
}

export default UserReg;
