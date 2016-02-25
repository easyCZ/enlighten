import { CONVERSATIONS_INIT, CONVERSATIONS_LOAD } from './ContactsActions';


export function initConversations() {
  return { type: CONVERSATIONS_INIT }
}

export function loadConversations(conversations) {
  return { type: CONVERSATIONS_LOAD, conversations }
}