import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProductWishList,
  getAllWishList,
  removeProductWishList,
} from "../../services/AuthService";
import { hideLoading, showLoading } from "./loading.slice";

const initialState = {
  arrWishList: [],
  wishlistObject: {},
};

// API lấy danh sách wishlist
export const handleGetAllWishListAPI = createAsyncThunk(
  "productWishList/handleGetAllWishListAPI",
  async (userId) => {
    const result = await getAllWishList(userId);
    return result.map((item) => ({
      ...item,
      addedAt: item.addedAt?.toDate?.().toISOString() || null, // Chuyển Timestamp thành string
    }));
  }
);

// Thêm sản phẩm vào wishlist

export const handleAddWishListAPI = createAsyncThunk(
  "productWishList/handleAddWishListAPI",
  async ({ userId, productId }, { getState, dispatch }) => {
    try {
      dispatch(showLoading()); // Bật loading

      await addProductWishList(userId, productId);

      // Lấy danh sách cũ từ Redux
      const prevWishList = getState().productWishList.arrWishList || [];

      const newWishList = prevWishList.filter(
        (item) => item.productId !== productId
      );
      return newWishList;
    } catch (error) {
      console.log("Lỗi khi thêm vào wishlist:", error);
    } finally {
      dispatch(hideLoading()); // Tắt loading sau khi hoàn tất
    }
  }
);

// Xoá sản phẩm trog bảng wishlist
export const removeProductWishListAPI = createAsyncThunk(
  "productWishList/removeProductWishListAPI",

  async ({ userId, productId }, { getState, dispatch }) => {
    try {
      dispatch(showLoading()); // Bật loading
      await removeProductWishList(userId, productId);

      // Lấy danh sách cũ từ Redux
      const prevWishList = getState().productWishList.arrWishList || [];
      const newWishList = prevWishList.filter(
        (item) => item.productId !== productId
      );
      return newWishList;
    } catch (error) {
      console.log("Lỗi khi xoá vào wishlist:", error);
    } finally {
      dispatch(hideLoading()); // Tắt loading sau khi hoàn tất
    }
  }
);

const productWishList = createSlice({
  name: "productWishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetAllWishListAPI.fulfilled, (state, action) => {
      state.arrWishList = action.payload; // Không cần map lại vì đã chuyển đổi ở trên
      const mappedData = action.payload.reduce((acc, item) => {
        acc[item.productId] = item;
        return acc;
      }, {});
      state.wishlistObject = mappedData;
    });
    builder.addCase(handleAddWishListAPI.fulfilled, (state, action) => {
      state.arrWishList = action.payload;
    });
    builder.addCase(removeProductWishListAPI.fulfilled, (state, action) => {
      state.arrWishList = action.payload;
    });
  },
});

export const {} = productWishList.actions;

export default productWishList.reducer;
