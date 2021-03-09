import { client } from './client';
import { gql } from 'graphql-request';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ queryInitData ~~~ */

export function queryInitData() {
    const query = gql`query {
        me {
            id
        }
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('queryInitData', error));
}

export function queryZabbix() {
    const query = gql`query {
        zabbix {
            itemid
            lastclock
            lastvalue
        }
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('queryZabbix', error));
}
