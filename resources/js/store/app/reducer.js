import { LOADER_TOGGLE, MESSAGE_SET_LIST } from './actions';

const initialState = {
    isLoading: false,
    messages: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_TOGGLE:
            return { ...state, isLoading: action.payload };

        case MESSAGE_SET_LIST:
            return { ...state, messages: action.payload };

        default:
            return state;
    }
}
