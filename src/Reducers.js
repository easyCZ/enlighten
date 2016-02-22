import { combineReducers } from 'redux';
import login from './login/LoginReducer';

const rootReducer = combineReducers({
    login
})

export default rootReducer;