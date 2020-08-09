import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
    userData: {};
    user_signed_in: boolean;
    user_signed_up: boolean;
    user_request_reset_password: boolean;
    user_reset_password_finished: boolean;
}

const initial_state = {
    userData: {},
    user_signed_in: false,
    user_signed_up: false,
    user_request_reset_password: false,
    user_reset_password_finished: false
};


export const authReducer = (state = initial_state, action: any): AuthState => {
    switch (action.type) {
        case AuthActions.FETCH_USER:
            console.log(' fetch user', action.payload);
            return {
                ...state,
                userData: action.payload || null,
                user_signed_in: (action.payload) ? true : false,
            };
        case AuthActions.USER_SIGNED_IN:
            console.log('user signed in');
            return {
                ...state,
                user_signed_in: true,
                userData: action.payload
            };
        case AuthActions.USER_SIGNED_UP:
            return {
                ...state,
                user_signed_up: true
            };
        case AuthActions.USER_REQUEST_RESET_PASSWORD_INIT:
            return {
                ...state,
                user_request_reset_password: false
            };
        case AuthActions.USER_REQUEST_RESET_PASSWORD:
            return {
                ...state,
                user_request_reset_password: true
            };
        case AuthActions.USER_REQUEST_RESET_PASSWORD_FINISHED:
            return {
                ...state,
                user_request_reset_password: false,
                user_reset_password_finished: true
            };
        default:
            return state
    }
};


