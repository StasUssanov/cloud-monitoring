import { client } from './client';
import { gql } from 'graphql-request';

export function loginRequest({ email, password, remember = false }) {
    let variables = { email, password, remember };
    const query = gql`mutation (
        $email: String!,
        $password: String!,
        $remember: Boolean,
    ){
        authLogin(
            email: $email,
            password: $password,
            remember: $remember
        ){
            id
            token
        }
    }`;
    return client().request(query, variables)
        .then(data => data)
        .catch(error => console.error('loginRequest', error));
}

export function logoutRequest() {
    const query = gql`mutation {
        authLogout {
            id
        }
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('loginRequest', error));
}

export function refreshTokenRequest() {
    const query = gql`mutation {
        authRefreshToken
    }`;
    return client().request(query)
        .then(data => data)
        .catch(error => console.error('refreshTokenRequest', error));
}
