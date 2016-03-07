import * as ChatActionTypes from './ChatActionTypes'


export const initialState = {
  chatId: null,
  messages: {}
}


const addMessage = (messages, action) => {
  const { chatId, message, timestamp } = action
  if (!(chatId in messages)) messages[chatId] = {};

  messages[chatId][timestamp] = message;
  return messages
}


export default function chatReducer(state = initialState, action) {

  let messages;

  switch (action.type) {

    case ChatActionTypes.CHAT_VIEW:
      messages = Object.assign({}, state.messages)
      messages[action.chatId] = []
      return Object.assign({}, state, { chatId: action.chatId, messages })

    case ChatActionTypes.CHAT_SEND_MESSAGE:
      messages = addMessage(Object.assign({}, state.messages), action)
      return Object.assign({}, state, { messages })

    case ChatActionTypes.CHAT_RECEIVE_MESSAGE:
      messages = addMessage(Object.assign({}, state.messages), action)
      return Object.assign({}, state, { messages })

    case ChatActionTypes.CHAT_LOAD_MESSAGES:
      messages = Object.assign({}, state.messages)
      messages[action.chatId] = action.messages
      return Object.assign({}, state, { messages })


    default:
      return state

  }

}