import * as LoginActionTypes from '../constants/LoginActionTypes';

export function login(username) {
    return { type: LoginActionTypes.LOGIN, username }
}

export function logout(username) {
    return {type: LoginActionTypes.LOGOUT, username }
}
