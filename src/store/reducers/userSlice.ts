import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    
  }
});

export default userSlice.reducer;