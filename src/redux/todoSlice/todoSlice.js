import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

// const selectTodos = (state) => state.todos.items;

export const { addTodo, deleteTodo } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
export const todoReducer = todoSlice.reducer;
