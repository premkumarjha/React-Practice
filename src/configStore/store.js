import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import postsReducer from '../redux/postSlice';
import todoReducer from '../redux/todoSlice';

// Combine reducers here
const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    todo: todoReducer,
  },
});

export default store;
