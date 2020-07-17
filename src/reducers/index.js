import { combineReducers } from 'redux';
import offline from './offline';
import scoreReducer from './scoreReducer.js'
module.exports = combineReducers({
    offline,
    scoreReducer: scoreReducer
})