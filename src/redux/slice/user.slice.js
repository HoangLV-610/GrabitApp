import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const userData = action.payload;

      state.user = {
        ...userData,
        createdAt: userData.createdAt
          ? userData.createdAt.toDate().toISOString() // Chuyển đổi Timestamp
          : null,
      };
    },
    logoutUser: (state) => {
      (state.user = null), (state.isAuthenticated = false);
    },
  },
});

export const { loginSuccess, logoutUser } = userSlice.actions;

export default userSlice.reducer;
