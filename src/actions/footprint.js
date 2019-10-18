import * as helpers from '../helpers'
import {AUTHORIZED} from './types'

const setToken = (dispatch) => {
    helpers.fetchDirectLineToken()
    .then(resp => dispatch({type: AUTHORIZED, token: resp.token }))
    .catch(console.error)
}

export const footprintActions = {
    setToken
}