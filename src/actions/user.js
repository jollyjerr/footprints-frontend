import * as helpers from '../helpers'
import { SUCCESS } from './types'

const logInRequest = (user, endpoint, dispatch) => {
    fetch(`${helpers.apiURL}/${endpoint}`, helpers.userOptions(user))
    .then(resp => resp.json())
    .catch(alert)
    .then(helpers.logIn)
    .then(user => {
        dispatch({type: SUCCESS, user: user })
    })
}