import * as ChatActions from '../../src/chat/ChatActions';
import * as ChatActionTypes from '../../src/chat/ChatActionTypes';


describe('Chat Actions', () => {

  const CHAT_ID = 123
  const MESSAGE = 'Hello world!'
  const TIMESTAMP = 123456789

  it('should have a view chat action with chatId', () => {
    expect(ChatActions.viewChat(CHAT_ID)).to.eql({
      type: ChatActionTypes.CHAT_VIEW,
      chatId: CHAT_ID
    })
  })

  it('should have a send message action', () => {
    expect(ChatActions.sendMessage(CHAT_ID, MESSAGE, TIMESTAMP)).to.eql({
      type: ChatActionTypes.CHAT_SEND_MESSAGE,
      message: MESSAGE,
      chatId: CHAT_ID,
      timestamp: TIMESTAMP
    })
  })

  it('should have a receive message action', () => {
    expect(ChatActions.receiveMessage(CHAT_ID, MESSAGE, TIMESTAMP)).to.eql({
      type: ChatActionTypes.CHAT_RECEIVE_MESSAGE,
      message: MESSAGE,
      chatId: CHAT_ID,
      timestamp: TIMESTAMP
    })
  })

})