import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice/todoSlice';
import { filterReducer } from './filterSlice/filterSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});

export { store };
