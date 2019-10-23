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
      userid: user
    }
    addVehicle(vehicle)
    resetForm()
  }

  return (
    <div>
      <h2>What vehicles do you own?</h2>
      <form onSubmit={event => handleSubmit(event)} className="form">
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          placeholder="Subaru"
          required
          value={make}
          onChange={e => setMake(e.target.value)}
        />
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          placeholder="Outback"
          required
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          placeholder="2005"
          required
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <label htmlFor="fuel">Fuel source:</label>
        <input
          type="text"
          id="fuel"
          placeholder="Gasoline"
          required
          value={fuel}
          onChange={e => setFuel(e.target.value)}
        />
        <label htmlFor="mpg">Mpg:</label>
        <input
          type="number"
          id="mpg"
          placeholder="28"
          required
          value={mpg}
          onChange={e => setMpg(e.target.value)}
        />
        <button type="submit">Add Vehicle</button>
        <button id="next" onClick={next}>Next</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addVehicle: house => userActions.addVehicle(house, dispatch)
});


export default connect(null, mapDispatchToProps)(AddVehicle)
