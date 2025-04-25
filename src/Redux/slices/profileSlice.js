import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("profile")) || {
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    role: "Admin",
    location: "Unknown",
    joined: "2023-01-01",
    avatars: "../../../public/images/profile.png",
    stats: {
      posts: 0,
      tasks: 0,
      followers: 0,
    },
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("profile", JSON.stringify(state.user)); // ✅ overwrite full profile
    },
    updateProfilePicture: (state, action) => {
      state.user.avatars = action.payload;
      localStorage.setItem("profile", JSON.stringify(state.user)); // ✅ overwrite full profile
    },
  },
});

export const { updateProfile, updateProfilePicture } = profileSlice.actions;
export default profileSlice.reducer;
