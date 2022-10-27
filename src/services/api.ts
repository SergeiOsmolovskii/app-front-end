import { IUserForRegistration, IAuthParams } from '../models/IUser';
import { api } from '../axios/interceptor'; 

export const signUp = async (data: IUserForRegistration) => {
  const response = await api.post(`/auth/signup`, data);
  console.log(response);
  return response;
};

export const signIn = async (data: IAuthParams) => {
  const response = await api.post(`/auth/signin`, data);
  
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