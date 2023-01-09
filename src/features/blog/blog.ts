import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, deletelBlog, createBlog } from "../../api/blog";
import { blogType } from "../../models/blog";



interface Blog {
  values: any[];

}
const initialState: Blog = {
  values: [],

};
export const addBlog = createAsyncThunk(
  "Blog/addBlog",
  async (prams: blogType) => {
    const { data } = await createBlog(prams);
    return data;
  }
);
export const listBlog = createAsyncThunk(
  "Blog/getBlog",
  async () => {
    const { data } = await getBlog();
    return data
  });
export const removeBlogs = createAsyncThunk(
  "Blogs/deletelBlog",
  async (params: any) => {
    const data = await deletelBlog(params);
    return data;

  }
);

const Blog = createSlice({
  name: "Blog",
  initialState: {
    values: [],
    check: [],
  },
  reducers: {
    sortRoleBlog: (state, action) => {
      const role = action.payload
      state.values = state.values.filter((item: any) => item.role === role)
    },
    removeMultipleBlogs: (state, action) => {
      const data = action.payload;
      state.values = state.values.filter((x: any) =>
        state.check.every((x2: any) => x2 !== x._id)
      );
    },
    addMuiltipleValues: (state, action) => {
      const { value, checked } = action.payload;
      if (checked) {
        state.check = [...state.check, value];
      } else {
        state.check = state.check.filter((e: any) => e != value);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listBlog.fulfilled, (state, action) => {
      state.values = action.payload;
    });
    builder.addCase(removeBlogs.fulfilled, (state: any, action: any) => {
      state.values = state.values.filter(
        (item: any) => item.id != action.payload
      );
    });
    builder.addCase(addBlog.fulfilled, (state: any, action: any) => {
      state.value.unshift(action.payload);
    });
  },
});
export const {
  removeMultipleBlogs
} = Blog.actions;
export const { sortRoleBlog } = Blog.actions
export default Blog.reducer;
