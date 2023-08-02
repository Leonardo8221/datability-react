import { combineReducers } from 'redux'
import auth from './auth.js'
import coPilot from './co-pilot.js'
import notifications from './notification.js'
import connections from './connection.js'
import checkIn from './check-in.js'
export default combineReducers({
    notifications,
    auth,
    coPilot,
    connections,
    checkIn
})
