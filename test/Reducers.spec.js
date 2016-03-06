import { reducers } from '../src/Reducers.js';


describe('Root Reducer', () => {

  it('should have the login reducer', () => {
    expect(reducers).to.have.key('login');
  })

  it('should have the conversations reducer', () => {
    expect(reducers).to.have.key('conversations');
  })

  it('should have the chat reducer', () => {
    expect(reducers).to.have.key('chat');
  })

})