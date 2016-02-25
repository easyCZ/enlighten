import { reducers } from '../src/Reducers';


describe('Root Reducer', () => {

  it('should have the login reducer', () => {
    expect(reducers).to.have.key('login');
  })

})