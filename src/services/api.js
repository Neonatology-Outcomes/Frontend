import { create } from 'apisauce';
import { endpoints, apiUrl } from '../constants/api';

const headers = { 
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};

const api = create({
    baseURL: apiUrl,
    
});

const getAuthorizationHeader = (token) => ({
    Authorization: `Bearer ${token}`
})

// this doesn't need the auth header
export const login = async (body) => {
    const auth = await api.post(
        endpoints.login,
        { ...body },
        headers,
    );

    return auth;
};

// this doesn't need the auth header
export const createUser = async(body) => {
    const user = await api.post(
        endpoints.signup,
        { ...body },
        headers
    )

    return user;
};
