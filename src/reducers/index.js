import {combineReducers} from 'redux'
import adminInfo from './adminInfo'
import userInfo from './userInfo'
import dbInfo from './dbInfo'

const rootReducer = combineReducers ({
    adminInfo,
    userInfo,
    dbInfo,
});

export default rootReducer
