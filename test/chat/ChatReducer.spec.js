import chatReducer, { initialState } from '../../src/chat/ChatReducer'
import { viewChat } from '../../src/chat/ChatActions';


describe('Chat Reducer', () => {

  const CHAT_ID = 123;
  const UNKNOWN_STATE = { type: 'unknown' };

  describe('with chat view attribute', () => {

    it('should be null initially', () => {
      const state = chatReducer(undefined, UNKNOWN_STATE);
      expect(state.chatView).to.eql(null);
    })

    it('should set the chatView to id of the chat when requested', () => {
      const action = viewChat(CHAT_ID)
      const state = chatReducer(initialState, action)
      expect(state.chatView).to.eql(CHAT_ID)
    })

    it('should change the state to a new one if already set', () => {
      const action = viewChat(999)
      const previousState = chatReducer(initialState, viewChat(CHAT_ID))
      const state = chatReducer(previousState, action)
      expect(state.chatView).to.eql(999)
    })

  })



})