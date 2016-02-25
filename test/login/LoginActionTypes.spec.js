import { LOGIN, LOGOUT } from '../../src/login/LoginActionTypes';


describe('LoginActionTypes', () => {

    it('should have a LOGIN', () => {
        expect(LOGIN).to.be.eql('LOGIN');
    })

    it('should have a LOGOUT', () => {
        expect(LOGOUT).to.be.eql('LOGOUT');
    })

})