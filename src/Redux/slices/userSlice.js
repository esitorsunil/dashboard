// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const localData = JSON.parse(localStorage.getItem('users')) || [];

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: localData,
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
      localStorage.setItem('users', JSON.stringify(state.list));
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.list));
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
        localStorage.setItem('users', JSON.stringify(state.list));
      }
    },
    deleteUser: (state, action) => {
        state.list = state.list.filter(user => user.id !== action.payload);
        localStorage.setItem('users', JSON.stringify(state.list));
      }
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
