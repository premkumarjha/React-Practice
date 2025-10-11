import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
   // data: { userName: "" },
    todos: [],
    //editId: null,
    editedData: { userName: "" },
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      
    },
    saveTodo: (state, action) => {
        console.log('action', action);
        const {editedData, index} = action.payload;
      state.todos = state.todos.map((todo, todoId) =>index ==todoId ?{...todo,userName:editedData.userName}:todo);
        
    },
    deleteTodo: (state, action) => {
        console.log('action.payload', action.payload);
      state.todos = state.todos.filter((item, id) => id != action.payload);
    }
  },
});
export const { addTodo,saveTodo,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
