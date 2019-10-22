import * as helpers from '../helpers'
import { SUCCESS } from './types'

const userRequest = (user, endpoint, dispatch) => {
    fetch(`${helpers.apiURL}/${endpoint}`, helpers.userOptions(user))
    .then(resp => resp.json())
    .catch(alert)
    // .then(helpers.logIn) //needs to be updated to new backend
    .then(user => {
        dispatch({type: SUCCESS, user: user })
    })
}

const addHouse = (house, dispatch) => {
    fetch(`${helpers.apiURL}/house/register`, helpers.houseOptions(house))
      .then(resp => resp.json())
      .catch(alert);
}

const addVehicle = (vehicle, dispatch) => {
    fetch(`${helpers.apiURL}/vehicle/register`, helpers.vehicleOptions(vehicle))
    .then(resp => resp.json())
    .catch(alert)
}

export const userActions = {
    userRequest,
    addHouse,
    addVehicle
}