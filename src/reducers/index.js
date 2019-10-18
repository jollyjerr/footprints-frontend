import {combineReducers} from 'redux'
import {user} from './user'
import {token} from './footprint'

export default combineReducers({
    user,
    token
})