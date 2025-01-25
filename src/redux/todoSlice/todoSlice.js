import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
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
    changeCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(todo =>
        state.currentTodo.id === todo.id
          ? { ...todo, value: action.payload }
          : todo,
      );
      state.currentTodo = null;
    },
  },
  selectors: {
    selectTodos: state => state.items,
    selectCurrentTodo: state => state.currentTodo,
  },
});

// const selectTodos = (state) => state.todos.items;

export const { addTodo, deleteTodo, changeCurrentTodo, updateTodo } =
  todoSlice.actions;
export const { selectTodos, selectCurrentTodo } = todoSlice.selectors;
export const todoReducer = todoSlice.reducer;
