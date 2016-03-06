import { CHAT_VIEW } from './ChatActionTypes';


export function viewChat(chatId) {
  return { type: CHAT_VIEW, chatId }
}
