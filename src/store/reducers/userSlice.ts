import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';
import { featchUser } from './actionsCreators';

const initialState = {
  login: '',
  email: '',
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: {
    [featchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.email = action.payload.email;
      state.login = action.payload.login;
    },
    [featchUser.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    [featchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }

});

export default userSlice.reducer;