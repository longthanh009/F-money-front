import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "../../api/blog";



interface Blog{
  values: any[];
}
const initialState: Blog = {
  values: [],
};

export  const listBlog = createAsyncThunk(
"Blog/getBlog", 
async () => {
  const { data } = await getBlog();
  return data
});

const Blog = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    sortRoleBlog: (state, action) => {
      const role = action.payload
      state.values = state.values.filter((item: any) => item.role === role)
  },
  },
  extraReducers: (builder) => {
    builder.addCase(listBlog.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.values  = action.payload;
    });
  },
});
export const { sortRoleBlog } = Blog.actions
export default Blog.reducer;
