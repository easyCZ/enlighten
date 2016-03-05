import { combineReducers } from 'redux';
import login from './login/LoginReducer';
import conversations from './contacts/ConversationsReducer';


export const reducers = {
  login,
  conversations
}

const rootReducer = combineReducers(reducers)

export default rootReducer;