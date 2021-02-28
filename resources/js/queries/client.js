import { GraphQLClient } from 'graphql-request';

const url = window.location.origin + '/graphql';

export const client = () => new GraphQLClient(url, {
    headers: setHeaders(),
});

function setHeaders() {
    const token = localStorage.getItem('token');
    return (token) ? { Authorization: `Bearer ${localStorage.getItem('token')}` } : {};
}
