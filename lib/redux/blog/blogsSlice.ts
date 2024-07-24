import { Blog, BlogState } from "@/src/blog/blogTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

const BASE_URL = "/api/blog/${blogId}";

const fetchBlogById = createAsyncThunk<Blog, string>(
  "blogs/fetchBlogById",
  async (blogId) => {
    const url = BASE_URL.replace("${blogId}", blogId);
    const response = await axios.get<Blog>(url);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearSelectedBlog: (state) => {
      state.selectedBlog = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchBlogById };
export const { clearSelectedBlog } = commentsSlice.actions;
export default commentsSlice.reducer;
