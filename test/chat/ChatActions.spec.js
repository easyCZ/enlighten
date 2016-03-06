import { viewChat } from '../../src/chat/ChatActions';
import { CHAT_VIEW } from '../../src/chat/ChatActionTypes';


describe('Chat Actions', () => {

  const CHAT_ID = 123

  it('should have a view chat action with chatId', () => {
    expect(viewChat(CHAT_ID)).to.eql({
      type: CHAT_VIEW,
      chatId: CHAT_ID
    })
  })

})