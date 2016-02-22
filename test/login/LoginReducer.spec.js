import expect from 'expect.js';
import Immutable, { Map } from 'immutable';
import LoginReducer from '../../src/login/LoginReducer';
import { login, logout } from '../../src/login/LoginActions';


describe('LoginReducer', () => {

    const username = 'username';
    const loggedinState = login(username)

    it('should return the initial state', () => {
        expect(Immutable.is(
            LoginReducer(undefined, {}),
            Map({
                authenticated: false,
                username: null
            })
        )).to.be.ok()
    })

    it('should handle login from initial state', () => {
        expect(Immutable.is(
            LoginReducer(undefined, login(username)),
            Map({
                username: username,
                authenticated: true
            })
        )).to.be.ok();
    })

    it('should handle logout from initial state', () => {
        expect(Immutable.is(
            LoginReducer(undefined, logout()),
            Map({
                username: null,
                authenticated: false
            })
        )).to.be.ok();
    })

    it('should handle login from login state', () => {
        const username2 = 'username2';
        expect(Immutable.is(
            LoginReducer(loggedinState, login(username2)),
            Map({
                username: username2,
                authenticated: true
            })
        )).to.be.ok()
    })

    it('should handle logout from login state', () => {
        expect(Immutable.is(
            LoginReducer(loggedinState, logout()),
            Map({
                username: null,
                authenticated: false
            })
        )).to.be.ok()
    })



})