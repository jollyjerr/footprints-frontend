import React, { useState } from "react";
import { connect } from "react-redux";

import { userActions } from "../actions";

function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    let user = { 
      name,
      password
    };
    props.logIn(user);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={event => handleSubmit(event)}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logIn: user => userActions.userRequest(user, "auth/login", dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
