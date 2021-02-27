import { LOADER_TOGGLE } from './actions';

const initialState = {
    isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_TOGGLE:
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
}
