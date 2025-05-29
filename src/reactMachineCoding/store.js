import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer"; // Importing the counter reducer from the reducer file

const store = configureStore({
  reducer: {
    counter: counterReducer, //yaha jo "counter" as key wo slice name hai ki jo createSlice me name me slice name diya hai.
  },
});

export default store;
