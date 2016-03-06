import * as ChatActionTypes from '../../src/chat/ChatActionTypes';


describe('Chat Action Types', () => {

  it('should have an action to view a given chat', () => {
    expect(ChatActionTypes.CHAT_VIEW).to.eql('CHAT_VIEW')
  })

  it('should have an action to send a message', () => {
    expect(ChatActionTypes.CHAT_SEND_MESSAGE).to.eql('CHAT_SEND_MESSAGE')
  })

})