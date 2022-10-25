export interface IUser {
  id: string;
  name: string;
  email: string;
} 

export interface IUserForRegistration {
  login: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthParams {
  login: string;
  password: string;
}