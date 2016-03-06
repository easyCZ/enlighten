import { CHAT_VIEW, CHAT_SEND_MESSAGE } from './ChatActionTypes';


export function viewChat(chatId) {
  return { type: CHAT_VIEW, chatId }
}

export function sendMessage(chatId, message, timestamp) {
  return { type: CHAT_SEND_MESSAGE, chatId, message, timestamp}
}