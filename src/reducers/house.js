import { ADDHOUSE } from '../actions/types'

export const houses = (state = [], action) => {
    switch (action.type) {
        case ADDHOUSE:
            return [...state, action.house]
        default:
            return state
    }
}