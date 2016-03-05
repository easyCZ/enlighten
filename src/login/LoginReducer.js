import { LOGIN, LOGOUT } from './LoginActionTypes'

const initialState = {
    authenticated: false,
    username: null
}

const devInitialState = {
    authenticated: true,
    username: 'user1'
}

export default function loginReducer(state = devInitialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
                username: action.username
            }

        case LOGOUT:
            return initialState

        default:
            return state
    }
}

export { initialState };