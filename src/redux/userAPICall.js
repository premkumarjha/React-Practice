import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginSuccess } from './userSlice';

// Async thunk for fetching data with try-catch

export const fetchUsers = createAsyncThunk(
  'data/fetchData',
  async (val, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      val(loginSuccess());
      return response.data; // Return the data on success
    } catch (error) {
      
        return rejectWithValue({
          message: error.response.data || 'Failed to fetch data from API.',
          status: error.response.status,
        });
      } 
    }
 
);
