import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../../services/AuthService";

const initialState = {
  arrProduct: [],
};

export const handleGetAllProductAPI = createAsyncThunk(
  "productSlice/handleGetAllProduct",
  async (stringData) => {
    console.log(stringData);
    const result = await getAllProduct();
    return result;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // có 3 trạng thái
    // trạng thái chờ: pedding
    // trạng thái lỗi: reject
    // thành công: fulfilled
    builder.addCase(handleGetAllProductAPI.fulfilled, (state, action) => {
      state.arrProduct = action.payload;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
