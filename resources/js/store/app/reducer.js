import { LOADER_TOGGLE, MESSAGE_SET_LIST, ZABBIX_SET_DATA } from './actions';

const initialState = {
    isLoading: false,
    messages: [],
    zabbixItems: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_TOGGLE:
            return { ...state, isLoading: action.payload };

        case MESSAGE_SET_LIST:
            return { ...state, messages: action.payload };

        case ZABBIX_SET_DATA:
            return { ...state, zabbixItems: action.payload };

        default:
            return state;
    }
}
