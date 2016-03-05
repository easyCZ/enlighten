import { CONVERSATIONS_INIT, CONVERSATIONS_LOAD } from './ContactsActionTypes';

export const initialState = {
  conversations: {},
  loading: false
}

export default function conversationsReducer(state = initialState, action) {

  switch (action.type) {

    case CONVERSATIONS_INIT:
      return Object.assign({}, state, { loading: true })

    case CONVERSATIONS_LOAD:
      let conversations = {};
      action.conversations.forEach(id => conversations[id] = { id })
      return Object.assign({}, state, { loading: false, conversations })

    default:
      return state

  }

}
