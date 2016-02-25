import LoginReducer from '../../src/login/LoginReducer';
import { login, logout } from '../../src/login/LoginActions';


describe('LoginReducer', () => {

    const username = 'username';
    const loggedinState = login(username)

    it('should return the initial state', () => {
        expect(LoginReducer(undefined, {})).to.be.eql({
            authenticated: false,
            username: null
        })
    })

    it('should handle login from initial state', () => {
        expect(LoginReducer(undefined, login(username))).to.be.eql({
            username: username,
            authenticated: true
        })
    })

    it('should handle logout from initial state', () => {
        expect(LoginReducer(undefined, logout())).to.be.eql({
            username: null,
            authenticated: false
        })
    })

    it('should handle login from login state', () => {
        const username2 = 'username2';
        expect(LoginReducer(loggedinState, login(username2))).to.be.eql({
            username: username2,
            authenticated: true
        })
    })

    it('should handle logout from login state', () => {
        expect(LoginReducer(loggedinState, logout())).to.be.eql({
            username: null,
            authenticated: false
        })
    })

})