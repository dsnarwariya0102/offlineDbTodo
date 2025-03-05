import {createSlice} from '@reduxjs/toolkit';
import {
  addTaskToRealm,
  updateTaskInRealm,
  deleteTaskFromRealm,
  getAllTasksFromRealm,
} from '../../realmDB/realmService'; // Import service

const initialState = {
  todos: getAllTasksFromRealm(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = addTaskToRealm(action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = updateTaskInRealm(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = deleteTaskFromRealm(action.payload);
    },
  },
});

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
