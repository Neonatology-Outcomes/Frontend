import { create } from 'apisauce';
import { endpoints, apiUrl } from '../constants/api';
import { getAuthToken } from './storage';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': 'any',
};

const api = create({
  baseURL: apiUrl,
});

const getAuthorizationHeader = (authToken) => ({
  Authorization: `Bearer ${authToken}`,
});

// this doesn't need the auth header
export const login = async (body) => {
  const auth = await api.post(endpoints.login, { ...body }, headers);

  return auth;
};

// this doesn't need the auth header
export const createUser = async (body) => {
  const user = await api.post(endpoints.signup, { ...body }, headers);

  return user;
};

export const getToDos = async () => {
  const authToken = await getAuthToken();
  api.setHeaders({
    ...getAuthorizationHeader(authToken),
  });
  const toDos = await api.get(
    endpoints.todos,
    // headers and auth header for endpoints with authorization
  );

  return toDos;
};
