import axios from 'axios';
import { request } from 'http';
import { IUserForRegistration } from '../models/IUser';
export const baseURL = 'http://localhost:4000';

const authFetch = axios.create({
  baseURL: 'http://localhost:4000',
});

authFetch.interceptors.request.use((request) => {
  // request.headers.common['Accept'] = 'application/json';
  console.log('request send');
  return request;
}, (error) => {
  return Promise.reject(error);
});

authFetch.interceptors.response.use((response) => {
  console.log('response received');
  return response;
}, (error) => {
  return Promise.reject(error);
});