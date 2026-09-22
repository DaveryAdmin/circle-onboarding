import { useAuth } from '../context/AuthContext';
import { useCallback } from 'react';
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api';
export const useApi = () => {
  const { token, logout } = useAuth();
  const request = useCallback(async (path, options = {}) => {
    const res = await fetch(BASE_URL + path, { ...options, headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token, ...options.headers } });
    if (res.status === 401) { logout(); throw new Error('Session expired'); }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? 'HTTP ' + res.status);
    return data;
  }, [token, logout]);
  const get = (path) => request(path, { method: 'GET' });
  const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) });
  const patch = (path, body) => request(path, { method: 'PATCH', body: JSON.stringify(body) });
  return { get, post, patch };
};