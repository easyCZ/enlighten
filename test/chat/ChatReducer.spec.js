import chatReducer, { initialState } from '../../src/chat/ChatReducer'
import * as ChatActions from '../../src/chat/ChatActions';


describe('Chat Reducer', () => {

  const CHAT_ID = 123;
  const UNKNOWN_ACTION = { type: 'unknown' };

  describe('with chat view attribute', () => {

    it('should be null initially', () => {
      const state = chatReducer(undefined, UNKNOWN_ACTION);
      expect(state.chatView).to.eql(null);
    })

    it('should set the chatView to id of the chat when requested', () => {
      const action = ChatActions.viewChat(CHAT_ID)
      const state = chatReducer(initialState, action)
      expect(state.chatView).to.eql(CHAT_ID)
    })

    it('should change the state to a new one if already set', () => {
      const action = ChatActions.viewChat(999)
      const previousState = chatReducer(initialState, ChatActions.viewChat(CHAT_ID))
      const state = chatReducer(previousState, action)
      expect(state.chatView).to.eql(999)
    })

  })

  const MESSAGE = 'Hello world!'
  const TIMESTAMP = 123456789

  describe('messages', () => {

    it('should be empty initially', () => {
      const state = chatReducer(undefined, UNKNOWN_ACTION);
      expect(state.messages).to.eql({})
    })

    it('should add the message to message when sent', () => {
      const action = ChatActions.sendMessage(CHAT_ID, MESSAGE, TIMESTAMP)
      const state = chatReducer(initialState, action)
      expect(state.messages).to.have.key(CHAT_ID.toString())
      expect(state.messages[CHAT_ID]).to.have.key(TIMESTAMP.toString())
      expect(state.messages[CHAT_ID][TIMESTAMP]).to.eql(MESSAGE)
    })

    it('should add the message to message when received', () => {
      const action = ChatActions.receiveMessage(CHAT_ID, MESSAGE, TIMESTAMP)
      const state = chatReducer(initialState, action)
      expect(state.messages).to.have.key(CHAT_ID.toString())
      expect(state.messages[CHAT_ID]).to.have.key(TIMESTAMP.toString())
      expect(state.messages[CHAT_ID][TIMESTAMP]).to.eql(MESSAGE)
    })

  })



})