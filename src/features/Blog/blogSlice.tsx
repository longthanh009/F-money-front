import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBlog, listBlog, deleteBlog, editBlog } from "../../api/Blog";

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
export const addBlog = createAsyncThunk("blog/addBlog", async (blog: any) => {
  const { data } = await createBlog(blog);
  return data;
});

export const removeBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (prams: any) => {
    const data = await deleteBlog(prams);
    return prams;
  }
);
export const updateBlock = createAsyncThunk(
  "blog/updateBlock",
  async (prams: any) => {
    const { data } = await editBlog(prams);
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
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
    builder.addCase(removeBlog.fulfilled, (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    });
    builder.addCase(updateBlock.fulfilled, (state, action) => {
      state.value = state.value.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});

export default blogSlice.reducer;
