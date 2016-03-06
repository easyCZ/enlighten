import { CHAT_VIEW } from './ChatActionTypes'


export const initialState = {
  chatView: null
}


export default function chatReducer(state = initialState, action) {

  switch (action.type) {

    case CHAT_VIEW:
      const chatId = action.chatId
      return Object.assign({}, state, { chatView: chatId })


    default:
      return state

  }

}