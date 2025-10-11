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

/* above two lines can be also written  like below */

// const { actions, reducer } = userSlice;

// export const { loginSuccess } = actions;
// export default reducer;


/*
export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;

userSlice.actions → gives you all the action creators (loginSuccess, logout, etc.).

userSlice.reducer → the reducer function you pass to the store.

That’s why you export them separately

*/