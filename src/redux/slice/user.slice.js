import { createSlice } from "@reduxjs/toolkit";

const userStorage = localStorage.getItem("user");

const initialState = {
  user: userStorage ? JSON.parse(userStorage) : null,
  isAuthenticated: userStorage ? true : false,
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
          ? new Date(userData.createdAt).toISOString() // Chuyển timestamp sang ISO nếu có
          : null,
      };
      state.isAuthenticated = true; // Đánh dấu đã đăng nhập

      localStorage.setItem("user", JSON.stringify(state.user)); // Lưu user vào localStorage
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      localStorage.setItem("users", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // Xóa user khỏi localStorage
    },
  },
});

export const { loginSuccess, updateUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
