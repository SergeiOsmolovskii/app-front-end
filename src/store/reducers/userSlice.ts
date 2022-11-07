import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';
import { featchUser } from './actionsCreators';

const initialState = {
  login: '',
  email: '',
  isLoading: false,
  isAuth: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.login = '';
      state.email = '';
      state.isLoading = false;
      state.isAuth = false;
      state.error = '';
    },
  },
  extraReducers: {
    [featchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    [featchUser.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    [featchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
  }

});

export default userSlice.reducer;