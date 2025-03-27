import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProductWishList,
  getAllWishList,
  removeProductWishList,
} from "../../services/AuthService";

const initialState = {
  arrWishList: [],
};

// API lấy danh sách wishlist
export const handleGetAllWishListAPI = createAsyncThunk(
  "productWishList/handleGetAllWishListAPI",
  async () => {
    const result = await getAllWishList();
    return result.map((item) => ({
      ...item,
      addedAt: item.addedAt?.toDate?.().toISOString() || null, // Chuyển Timestamp thành string
    }));
  }
);

// Thêm sản phẩm vào wishlist
export const handleAddWishListAPI = createAsyncThunk(
  "productWishList/handleAddWishListAPI",
  async ({ userId, productId }, { dispatch }) => {
    await addProductWishList(userId, productId);
    dispatch(handleGetAllWishListAPI()); // Cập nhật Redux sau khi thêm
  }
);

// Xoá sản phẩm trog bảng wishlist
export const removeProductWishListAPI = createAsyncThunk(
  "productWishList/removeProductWishListAPI",
  async ({ userId, productId }, { getState }) => {
    await removeProductWishList(userId, productId);

    // Cập nhật Redux trực tiếp, không gọi lại API
    const newWishList = getState().productWishList.arrWishList.filter(
      (item) => item.productId !== productId
    );

    return newWishList;
  }
);

const productWishList = createSlice({
  name: "productWishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetAllWishListAPI.fulfilled, (state, action) => {
      state.arrWishList = action.payload; // Không cần map lại vì đã chuyển đổi ở trên
    });
    builder.addCase(removeProductWishListAPI.fulfilled, (state, action) => {
      state.arrWishList = action.payload;
    });

    // extraReducers: (builder) => {
    //   builder.addCase(handleGetAllWishListAPI.fulfilled, (state, action) => {
    //     state.arrWishList = action.payload.map((item) => ({
    //       ...item,
    //       addedAt:
    //         item.addedAt instanceof Timestamp
    //           ? item.addedAt.toDate().toISOString() // Chuyển thành ISO string
    //           : item.addedAt,
    //     }));
    //   });
  },
});

export const {} = productWishList.actions;

export default productWishList.reducer;
