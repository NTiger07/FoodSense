import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    sidebar: "dashboard",
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    setSidebar: (state, action) => {
      return { ...state, sidebar: action.payload };
    },
    clearUser: (state) => {
      return { ...state, user: null };
    },
  },
});

export const { setUser, clearUser, setSidebar } = userSlice.actions;
export default userSlice.reducer;
