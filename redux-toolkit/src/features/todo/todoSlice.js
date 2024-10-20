import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (action, state) => {
      state.todos = state.todos.filter((todo) => {
        if (todo.id === action.payload) {
          todo.text = action.payload.text;
          return todo;
        }
      });
    },
  },
});

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer
