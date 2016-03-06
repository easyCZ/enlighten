import { combineReducers } from 'redux';

import login from './login/LoginReducer';
import conversations from './contacts/ConversationsReducer';
import chat from './chat/ChatReducer';


export const reducers = {
  login,
  conversations,
  chat
}

const rootReducer = combineReducers(reducers)

export default rootReducer;