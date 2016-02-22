import expect from 'expect.js';

import { login, logout } from '../../src/login/LoginActions';
import { LOGIN, LOGOUT } from '../../src/login/LoginActionTypes';


describe('Login Actions', () => {

    let loginAction, logoutAction;
    const username = 'username';

    before(() => {
        loginAction = login(username)
        logoutAction = logout()
    })

    it("should have a login action", function() {
        expect(loginAction.type).to.be.eql(LOGIN);
        expect(loginAction.username).to.be.eql(username);
    });

    it("should have a logout action", function() {
        expect(logoutAction.type).to.be.eql(LOGOUT);
    });

})