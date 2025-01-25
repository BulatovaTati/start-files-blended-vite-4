import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    //   filter: filterReducer,
  },
});

export { store };
