import axios from 'axios';
import { getAuthenticatedUser } from './getAuthenticatedUser';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const publicApi = axios.create({
  baseURL: baseUrl,
});

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config) => {
  const user = getAuthenticatedUser();

  if (user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }

  return config;
});

export default api;
