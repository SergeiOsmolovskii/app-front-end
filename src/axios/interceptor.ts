import axios from 'axios';
import { request } from 'http';
import { IUserForRegistration } from '../models/IUser';
export const baseURL = 'http://localhost:4000';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');


export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  if (accessToken) {
    request.headers!["Authorization"] = `Bearer ${accessToken}`;
  }
  console.log('request send');
  return request;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  console.log('response received');
  return response;
}, (error) => {
  return Promise.reject(error);
});