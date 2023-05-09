import { create } from 'apisauce';
import { endpoints, apiUrl } from '../constants/api';
import { getAuthToken } from './storage';
import { fixNullTask } from '../utils';

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

export const forgotPassword = async (body) => {
  const password = await api.post(endpoints.forgotPassword, { ...body }, headers);

  return password;
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

  const mappedTodos = fixNullTask(toDos.data);

  return {
    ...toDos,
    data: [...mappedTodos],
  };
};

export const getDashboard = async () => {
  const authToken = await getAuthToken();
  api.setHeaders({
    ...getAuthorizationHeader(authToken),
  });
  const dashboard = await api.get(
    endpoints.dashboard,
    // headers and auth header for endpoints with authorization
  );

  const mappedDashboard = fixNullTask(dashboard.data);

  return {
    ...dashboard,
    data: [...mappedDashboard],
  };
};
