import { IUserForRegistration, IAuthParams } from '../models/IUser';
import { api, baseURL } from '../axios/interceptor'; 
import axios from 'axios';

export const signUp = async (data: IUserForRegistration) => {
  const response = await axios.post(`${baseURL}/auth/signup`, data);
  console.log(response);
  return response;
};

export const signIn = async (data: IAuthParams) => {
  const response = await axios.post(`${baseURL}/auth/signin`, data);
  
  console.log(response);
  return response;
}

export const getUserByID = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return response;
}

export const getAllUsers = async () => {
  const response = await api.get(`/user`);
  return response;
}

export const createNewToken = async (refreshToken: string) => {
  const response = await axios.post(`${baseURL}/auth/refresh`, { refreshToken });
  console.log(response);
  return response;
}