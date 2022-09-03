import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users');
  return response.data;
});