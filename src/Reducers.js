import { combineReducers } from 'redux';
import login from './login/LoginReducer';


export const reducers = {
  login
}

const rootReducer = combineReducers(reducers)

export default rootReducer;