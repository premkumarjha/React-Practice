import { createSlice } from '@reduxjs/toolkit';
import {fetchUsers} from "./userAPICall";


// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading:false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      //state.isAuthenticated = true;
      state.users = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
       
        state.error = action.error.message;
      });
  },
});
export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
