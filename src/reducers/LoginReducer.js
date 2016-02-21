import { LOGIN, LOGOUT } from '../constants/LoginActionTypes'

const initialState = {
    authenticated: false,
    username: null
}

export default function loginReducer(state = initialState, action) {
    console.log(state, action);
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