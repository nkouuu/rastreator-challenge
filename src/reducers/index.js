import {combineReducers} from 'redux'
import newsReducer from './newsReducer'
import activeNewReducer from './activeNewReducer'

export default combineReducers({
    news:newsReducer,
    activeNew:activeNewReducer
})