import React, { useState } from "react";
import { connect } from "react-redux";

import { userActions } from "../actions";

function AddHouse({next, addHouse, user}) {
    const [location, setLocation] = useState("");
    const [squarefootage, setSquarefootage] = useState("");
    const [food, setFood] = useState("");
    const [solar, setSolar] = useState(false);
    const [wind, setWind] = useState(false);
    const [geothermal, setGeothermal] = useState(false);

    const resetForm = () => {
      setLocation("")
      setSquarefootage("")
      setFood("")
      setSolar(false)
      setWind(false)
      setGeothermal(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let house = {
          location,
          squarefootage,
          food,
          solar,
          wind,
          geothermal,
          userid: user
        }
        addHouse(house)
        resetForm()
    }

    return (
      <div>
        <h2>What buildings do you own?</h2>
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
            type="number"
            id="squarefootage"
            placeholder="2000"
            value={squarefootage}
            onChange={e => setSquarefootage(e.target.value)}
          />
          <label htmlFor="food">Primary food source:</label>
          <input
            type="text"
            id="food"
            placeholder="Personal Garden"
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
          <button id="next" onClick={next}>Next</button>
        </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  addHouse: house => userActions.addHouse(house, dispatch)
});

export default connect(null, mapDispatchToProps)(AddHouse)
