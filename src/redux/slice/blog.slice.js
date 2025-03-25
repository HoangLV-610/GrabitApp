import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBlogs } from "../../services/AuthService";

const initialState = {
  arrBlogs: [],
};

export const handleGetAllBlogsAPI = createAsyncThunk(
  "blogSlice/handleGetAllBlogs",
  async () => {
    // console.log(stringData);
    const result = getAllBlogs();
    return result;
  }
);

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      handleGetAllBlogsAPI.fulfilled,
      (state, action) => (state.arrBlogs = action.payload)
    );
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
