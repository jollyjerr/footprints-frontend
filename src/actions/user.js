import * as helpers from '../helpers'
import { SUCCESS } from './types'

const userRequest = (user, endpoint, dispatch) => {
    fetch(`${helpers.apiURL}/${endpoint}`, helpers.userOptions(user))
    .then(resp => resp.json()) //responds with the new users Id
    .catch(alert)
    .then(helpers.logIn) 
    .then(user => {
        dispatch({type: SUCCESS, user: user })
    })
}

const addHouse = (house, dispatch) => {
    fetch(`${helpers.apiURL}/house/register`, helpers.houseOptions(house))
      .then(resp => resp.json())
      .then(console.log)
      .catch(alert);
}

const addVehicle = (vehicle, dispatch) => {
    fetch(`${helpers.apiURL}/vehicle/register`, helpers.vehicleOptions(vehicle))
    .then(resp => resp.json())
    .then(console.log)
    .catch(alert)
}

export const userActions = {
    userRequest,
    addHouse,
    addVehicle
}