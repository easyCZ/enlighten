import * as ChatActionTypes from './ChatActionTypes';


export function viewChat(chatId) {
  return { type: ChatActionTypes.CHAT_VIEW, chatId }
}

export function sendMessage(chatId, message, timestamp) {
  return { type: ChatActionTypes.CHAT_SEND_MESSAGE, chatId, message, timestamp}
}

export function loadMessages(chatId, messages) {
  return { type: ChatActionTypes.CHAT_LOAD_MESSAGES, chatId, messages }
}

export function receiveMessage(chatId, message, timestamp) {
  return { type: ChatActionTypes.CHAT_RECEIVE_MESSAGE, chatId, message, timestamp}
}