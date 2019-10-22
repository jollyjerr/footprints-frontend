import React, { useState } from "react";
import { connect } from "react-redux";

import { userActions } from "../actions";

function AddHouse({next}) {
    const [location, setLocation] = useState("");
    const [squareFootage, setSquareFootage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
      <div>
        <h1>Step Two!!!</h1>
        <form onSubmit={event => handleSubmit(event)} className="form">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Denver, CO, United States"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <label htmlFor="Squarefootage">SquareFootage:</label>
          <input
            type="text"
            id="Squarefootage"
            value={squareFootage}
            onChange={e => setSquareFootage(e.target.value)}
          />
          <button type="submit">Add Vehicle</button>
        </form>
        <button onClick={next}>Debugger NEXT</button>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  addHouse: house => userActions.addHouse(house, dispatch)
});

export default connect(null, mapDispatchToProps)(AddHouse)
