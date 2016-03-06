import * as ChatActionTypes from './ChatActionTypes'


export const initialState = {
  chatView: null,
  messages: {}
}


export default function chatReducer(state = initialState, action) {

  switch (action.type) {

    case ChatActionTypes.CHAT_VIEW:
      return Object.assign({}, state, { chatView: action.chatId })

    case ChatActionTypes.CHAT_SEND_MESSAGE:
      const { chatId, message, timestamp } = action
      const messages = Object.assign({}, state.messages)
      if (!(chatId in messages)) messages[chatId] = {}
      messages[chatId][timestamp] = message
      return Object.assign({}, state, { messages })


    default:
      return state

  }

}