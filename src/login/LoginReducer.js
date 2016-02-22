import { Map } from 'immutable';
import { LOGIN, LOGOUT } from './LoginActionTypes'

const initialState = Map({
    authenticated: false,
    username: null
})

export default function loginReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return Map({
                authenticated: true,
                username: action.username
            })

        case LOGOUT:
            return initialState

        default:
            return state
    }
}