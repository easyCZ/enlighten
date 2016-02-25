import { initConversations, loadConversations } from '../../src/contacts/ContactsActions';
import { CONVERSATIONS_INIT, CONVERSATIONS_LOAD } from '../../src/contacts/ContactsActions';


describe('Contacts Actions', () => {

  const conversations = [1, 2, 3];

  it('should have conversation init action type', () => {
    expect(initConversations()).to.eql({
      type: CONVERSATIONS_INIT
    });
  })

  it('should have load conversations action type and pass array through', () => {
    expect(loadConversations(conversations)).to.eql({
      type: CONVERSATIONS_LOAD,
      conversations
    });
  })


})