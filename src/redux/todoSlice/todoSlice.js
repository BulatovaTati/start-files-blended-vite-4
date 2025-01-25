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
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

// const selectTodos = (state) => state.todos.items;

export const { addTodo } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
export const todoReducer = todoSlice.reducer;
