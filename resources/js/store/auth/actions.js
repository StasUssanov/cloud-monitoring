/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Actions ~~~ */

export const AUTH_SIGN_IN = 'AUTH_SIGN_IN';
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_REFRESH_TOKEN = 'AUTH_REFRESH_TOKEN';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ActionsCreator ~~~ */

export const authSignIn = ({ email, password, remember }) => ({
    type: AUTH_SIGN_IN,
    payload: { email, password, remember },
});

export const authLogin = ({ user, token }) => ({
    type: AUTH_LOGIN,
    payload: { user, token },
});

export const authSignOut = () => ({
    type: AUTH_SIGN_OUT,
});

export const authLogout = () => ({
    type: AUTH_LOGOUT,
});

export const authRefreshToken = () => ({
    type: AUTH_REFRESH_TOKEN,
});
