import { Booking, User } from './types';
const base = import.meta.env.VITE_API_URL || 'http://localhost:3000';
async function call<T>(path: string, init: RequestInit = {}, token?: string) {
  const response = await fetch(base + path, { ...init, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) } });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(Array.isArray(data?.message) ? data.message.join(', ') : data?.message || 'Request failed');
  return data as T;
}
export const api = {
  login: (email: string, password: string) => call<{ accessToken: string; user: User }>('/auth/sign-in', { method: 'POST', body: JSON.stringify({ email, password }) }),
  register: (values: Record<string, string>) => call('/auth/sign-up', { method: 'POST', body: JSON.stringify(values) }),
  bookings: (token: string) => call<Booking[]>('/bookings', {}, token),
  create: (token: string, values: Omit<Booking, '_id'>) => call<Booking>('/bookings', { method: 'POST', body: JSON.stringify(values) }, token),
  update: (token: string, id: string, values: Omit<Booking, '_id'>) => call<Booking>(`/bookings/${id}`, { method: 'PATCH', body: JSON.stringify(values) }, token),
  remove: (token: string, id: string) => call<void>(`/bookings/${id}`, { method: 'DELETE' }, token),
};
