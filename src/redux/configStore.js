import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";
import productSlice from "./slice/product.slice";
import productWishList from "./slice/productWishList.slice";
import cartSlice from "./slice/cart.slice";
import loadingSlice from "./slice/loading.slice";

export const store = configureStore({
  reducer: {
    loadingSlice,
    userSlice,
    productSlice,
    productWishList,
    cartSlice,
  },
});
