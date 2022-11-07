import { getUserByID } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const featchUser = createAsyncThunk(
  'users/fetchUser',
  async (id: string, thunkAPI) => {
    try {
      const response = await getUserByID(id);
      return response.data;
    } catch (e: Error | any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = () => {
  
}
