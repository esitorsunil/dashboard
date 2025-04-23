import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: "Esitor Sunil",
    email: "sunirio23@gmail.com",
    username: "esitorsunil",
    role: "Administrator",
    joined: "March 10, 2023",
    location: "Pranathi, Begumpet",
    avatar: "https://avatars.githubusercontent.com/u/135955149?v=4",
    stats: {
      posts: 58,
      tasks: 134,
      followers: 980,
    },
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
