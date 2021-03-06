/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Actions ~~~ */

export const APP_INIT = 'APP_INIT';
export const LOADER_TOGGLE = 'LOADER_TOGGLE';

export const MESSAGE_SHOW = 'MESSAGE_SHOW';
export const MESSAGE_HIDE = 'MESSAGE_HIDE';
export const MESSAGE_SET_LIST = 'MESSAGE_SET_LIST';

export const ZABBIX_REQUEST_DATA = 'ZABBIX_REQUEST_DATA';
export const ZABBIX_SET_DATA = 'ZABBIX_SET_DATA';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ActionsCreator ~~~ */

export const appInit = () => ({
    type: APP_INIT,
});

export const loaderToggle = payload => ({
    type: LOADER_TOGGLE,
    payload: payload,
});

export const messageShow = ({ severity = 'info', title = null, message = null, lifeTime = 1500 }) => ({
    type: MESSAGE_SHOW,
    payload: ({ severity, title, message, lifeTime }),
});

export const messageHide = ({ id }) => ({
    type: MESSAGE_HIDE,
    payload: id,
});

export const messageSetList = payload => ({
    type: MESSAGE_SET_LIST,
    payload: payload,
});

export const zabbixRequestData = () => ({
    type: ZABBIX_REQUEST_DATA,
});

export const zabbixSetData = payload => ({
    type: ZABBIX_SET_DATA,
    payload
});
