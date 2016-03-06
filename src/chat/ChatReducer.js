import * as ChatActionTypes from './ChatActionTypes'


export const initialState = {
  chatView: null,
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
      return Object.assign({}, state, { chatView: action.chatId })

    case ChatActionTypes.CHAT_SEND_MESSAGE:
      messages = addMessage(Object.assign({}, state.messages), action)
      return Object.assign({}, state, { messages })

    case ChatActionTypes.CHAT_RECEIVE_MESSAGE:
      messages = addMessage(Object.assign({}, state.messages), action)
      return Object.assign({}, state, { messages })


    default:
      return state

  }

}