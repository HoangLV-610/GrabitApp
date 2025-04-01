import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProductToCart,
  getAllProductInCart,
  removeProductToCart,
} from "../../services/AuthService";
import { hideLoading, showLoading } from "./loading.slice";

const initialState = {
  arrCart: [],
  cartObject: {},
  isDrawVisiable: false,
};

export const handleGetAllProductToCartAPI = createAsyncThunk(
  "cartSlice/getAllProductToCartAPI",
  async (userId) => {
    const result = await getAllProductInCart(userId);

    return result.map((item) => ({
      ...item,
      addedAt: item.addedAt?.toDate?.().toISOString() || null, // Chuyển Timestamp thành string
    }));
  }
);

export const handleAddProductToCartAPI = createAsyncThunk(
  "cartSlice/handleAddProductToCartAPI",
  async ({ userId, productId }, { getState, dispatch }) => {
    try {
      dispatch(showLoading());

      await addProductToCart(userId, productId);

      // lấy ra danh sách hiện tại
      const prevCart = getState().cartSlice.arrCart || [];
      const newCart = prevCart.filter((item) => item.productId !== productId);
      return newCart;
    } catch (error) {
      console.log("Lỗi khi thêm vào cart:", error);
    } finally {
      dispatch(hideLoading());
    }
  }
);

export const handleRemoveProductToCartAPI = createAsyncThunk(
  "cartSlice/handleRemoveProductToCartAPI",
  async ({ userId, productId }, { dispatch, getState }) => {
    try {
      dispatch(showLoading());

      await removeProductToCart(userId, productId);
      // lấy ra danh sách hiện tại
      const prevCart = getState().cartSlice.arrCart || [];
      const newCart = prevCart.filter((item) => item.productId !== productId);
      return newCart;
    } catch (error) {
      console.log("Lỗi khi thêm vào cart:", error);
    } finally {
      dispatch(hideLoading());
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    toggleDraw: (state) => {
      state.isDrawVisiable = !state.isDrawVisiable;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetAllProductToCartAPI.fulfilled, (state, action) => {
      state.arrCart = action.payload;
      console.log(action.payload);

      const mappedData = action.payload.reduce((acc, item) => {
        acc[item.productId] = item;
        return acc;
      }, {});
      state.cartObject = mappedData;
    });

    builder.addCase(handleAddProductToCartAPI.fulfilled, (state, action) => {
      state.arrCart = action.payload;
    });

    builder.addCase(handleRemoveProductToCartAPI.fulfilled, (state, action) => {
      state.arrCart = action.payload;
    });
  },
});

export const { toggleDraw } = cartSlice.actions;

export default cartSlice.reducer;
