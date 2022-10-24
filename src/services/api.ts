import axios from 'axios';
import { IUserForRegistration } from '../models/IUser';
export const baseURL = 'http://localhost:4000';


export const signUp = async (data: IUserForRegistration) => {
  const response = await axios.post(`${baseURL}/auth/signup`, data);
  console.log(response);
  return response;
};