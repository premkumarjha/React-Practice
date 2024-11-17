import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data with try-catch
export const fetchPosts = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data; // Return the data on success
    } catch (error) {
      
        return rejectWithValue({
          message: error.response.data || 'Failed to fetch data from API.',
          status: error.response.status,
        });
      } 
    }
 
);
