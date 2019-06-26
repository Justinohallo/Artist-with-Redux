import {combineReducers} from 'redux'
import artists from './artist_reducer.js'

const rootReducer = combineReducers({
    artists
})

export default rootReducer; 