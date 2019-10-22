import { ADDVEHICLE } from '../actions/types'

export const vehicles = (state = [], action) => {
    switch (action.type) {
        case ADDVEHICLE:
            return [...state, action.vehicle]
        default:
            return state
    }
}