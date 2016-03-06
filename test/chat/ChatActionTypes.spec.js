import { CHAT_VIEW } from '../../src/chat/ChatActionTypes';


describe('Chat Action Types', () => {

  it('should have an action to view a given chat', () => {
    expect(CHAT_VIEW).to.eql('CHAT_VIEW')
  })

})