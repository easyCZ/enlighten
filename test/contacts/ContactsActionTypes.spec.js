import * as ActionTypes from '../../src/contacts/ContactsActionTypes';


describe('Contacts Action Types', () => {

  it('should have an action to initialize conversation load', () => {
    expect(ActionTypes.CONVERSATIONS_INIT).to.eql('CONVERSATIONS_INIT');
  })

  it('should have an action to load all conversations', () => {
    expect(ActionTypes.CONVERSATIONS_LOAD).to.eql('CONVERSATIONS_LOAD');
  })




})