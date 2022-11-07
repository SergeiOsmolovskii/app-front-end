import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { createNewToken } from '../services/api';
export const baseURL = 'http://localhost:4000';

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    "Content-Type": "application/json",
  },
});  

api.interceptors.request.use(async request => {

  let refreshToken = localStorage.getItem('refreshToken')!;
  let accessToken = localStorage.getItem('accessToken')!;
  
  if (accessToken) {
    request.headers!["Authorization"] = `Bearer ${accessToken}`;
  }

  const decodedAccessToken: any = accessToken ? jwt_decode(accessToken) : null;
  const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;
  
  if (!isExpired) {
    return request;
  }  
  
  const newToken = await createNewToken(refreshToken);
  localStorage.setItem('accessToken', newToken.data.accessToken);
  localStorage.setItem('refreshToken', newToken.data.refreshToken);
  request.headers!["Authorization"] = `Bearer ${newToken.data.accessToken}`;

  return request;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});