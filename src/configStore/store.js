import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import postsReducer from '../redux/postSlice';

// Combine reducers here
const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;
