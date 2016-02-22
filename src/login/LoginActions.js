import * as LoginActionTypes from './LoginActionTypes';

export function login(username) {
    return { type: LoginActionTypes.LOGIN, username }
}

export function logout() {
    return {type: LoginActionTypes.LOGOUT}
}
