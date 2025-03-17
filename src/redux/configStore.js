import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";
import productSlice from "./slice/product.slice";
export const store = configureStore({
  reducer: {
    userSlice,
    productSlice,
  },
});
