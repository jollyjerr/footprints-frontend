import React, {useState} from 'react'
import { connect } from "react-redux";

import { userActions } from "../actions";

function NewUser({next, signUp}) {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
    event.preventDefault();
    let user = { 
      username,
      password
    };
    signUp(user);
    next();
    };

    return (
      <div className="form-container">
      <h2>Who are you?</h2>
        {/* <button onClick={next} >DEBUGGER NEXT</button>  */}
        <form onSubmit={event => handleSubmit(event)} className="form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  signUp: user => userActions.userRequest(user, "auth/register", dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(NewUser);
