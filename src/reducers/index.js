import {combineReducers} from 'redux'
import answer from './answer'
import countries from './listcountries'
import score from './score'
import letter from './letter'
import timer from './timer'

export default combineReducers({
 answer,
 countries,
 score,
 letter,
 timer,
})