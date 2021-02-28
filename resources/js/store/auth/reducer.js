import jwtDecode from 'jwt-decode';
import { AUTH_LOGIN, AUTH_LOGOUT } from './actions';

function initialState() {
    const common = { user: null };
    const token = localStorage.getItem('token') || null;
    if (token) {
        const { exp } = jwtDecode(token);
        const now = Math.floor(Date.now() / 1000);
        if (now > exp) {
            localStorage.removeItem('token');
            return { ...common, token: null };
        }
    }
    return { ...common, token };
}

export default (state = initialState(), action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, user: action.payload.user, token: action.payload.token };

        case AUTH_LOGOUT:
            return { ...state, user: null, token: null };

        default:
            return state;
    }
};
