import conversationsReducer, { initialState } from '../../src/contacts/ConversationsReducer';
import { initConversations, loadConversations } from '../../src/contacts/ContactsActions';


describe('Conversations Reducer', () => {

  const conversations = [1, 2, 3];

  it('should have no conversations initially', () => {
    const state = conversationsReducer(undefined, {type: 'unknown'});
    expect(state.conversations).to.eql([]);
  })

  it('should have not be loading initially', () => {
    const state = conversationsReducer(undefined, {type: 'unknown'});
    expect(state.loading).to.eql(false);
  })

  it('should set loading to true when conversations init', () => {
    const action = initConversations()
    const state = conversationsReducer(initialState, action);
    expect(state.conversations).to.eql([]);
    expect(state.loading).to.eql(true);
  })

  it('should add conversations to the state when loaded', () => {
    const action = loadConversations(conversations)
    const state = conversationsReducer(initialState, action);
    expect(state.conversations).to.eql(conversations);
  })

  it('should set loading to false when convos are loaded', () => {
    const action = loadConversations(conversations)
    const state = conversationsReducer(initialState, action);
    expect(state.loading).to.eql(false);
  })

})