import {combineReducers} from 'redux'
import adminInfo from './adminInfo'
import userInfo from './userInfo'

const rootReducer = combineReducers ({
    adminInfo,
    userInfo,
});

export default rootReducer
