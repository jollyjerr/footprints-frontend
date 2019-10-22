import React, { useState } from "react";
import { connect } from "react-redux";

import { userActions } from "../actions";

function AddVehicle({ next, addVehicle, user }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [mpg, setMpg] = useState("");

  const resetForm = () => {
    setMake("")
    setModel("")
    setYear("")
    setFuel("")
    setMpg("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let vehicle = {
      make,
      model,
      year,
      fuel,
      mpg,
      userid: 1
    }
    addVehicle(vehicle)
    resetForm()
  }

  return (
    <div>
      {/* <h4>Vehicles</h4>
      <form onSubmit={event => handleSubmit(event)} className="form">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="Denver, CO, United States"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <label htmlFor="squarefootage">SquareFootage:</label>
        <input
          type="text"
          id="squarefootage"
          value={squareFootage}
          onChange={e => setSquareFootage(e.target.value)}
        />
        <label htmlFor="food">Primary food source:</label>
        <input
          type="text"
          id="food"
          value={food}
          onChange={e => setFood(e.target.value)}
        />
        <label htmlFor="solar">Solar:</label>
        <input
          type="checkbox"
          id="solar"
          checked={solar}
          onChange={e => setSolar(!solar)}
        />
        <label htmlFor="wind">Wind:</label>
        <input
          type="checkbox"
          id="wind"
          checked={wind}
          onChange={e => setWind(!wind)}
        />
        <label htmlFor="geothermal">Geothermal:</label>
        <input
          type="checkbox"
          id="geothermal"
          checked={geothermal}
          onChange={e => setGeothermal(!geothermal)}
        />
        <button type="submit">Add House</button>
      </form> */}
      <button onClick={next}>Next</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addVehicle: house => userActions.addVehicle(house, dispatch)
});

export default connect(null, mapDispatchToProps)(AddVehicle)
