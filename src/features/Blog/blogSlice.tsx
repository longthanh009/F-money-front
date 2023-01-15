import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listBlog } from "../../api/Blog";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const getAllListBlogs = createAsyncThunk(
  "blog/getAllListBlogs",
  async () => {
    const { data } = await listBlog();
    return data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllListBlogs.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default blogSlice.reducer;
