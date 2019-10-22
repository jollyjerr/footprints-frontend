import {combineReducers} from 'redux'
import {user} from './user'
import {token} from './footprint'
import {houses} from './house'
import {vehicles} from './vehicle'

export default combineReducers({
    user,
    token,
    houses,
    vehicles
})