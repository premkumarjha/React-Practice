import { createSlice } from '@reduxjs/toolkit';
import {fetchPosts} from "./postAPICall";
import {loginSuccess} from "./userSlice"

// Create the user slice
const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    isLoading:false,
    error: null,
    message:"",
    status:200,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
       
        state.error = action.error.message;
      });
      builder.addCase(loginSuccess, (state, action) => {
        state.message="tttttttttttttttttttttttttttt"
      });
  },
});

export default postSlice.reducer;
