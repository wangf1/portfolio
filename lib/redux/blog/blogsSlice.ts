import { toast } from "@/components/ui/use-toast";
import { Blog, BlogData, BlogState } from "@/src/blog/blogTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: BlogState = {
  blogs: [],
  status: "idle",
};

const BASE_URL = "/api/blogs/";

const fetchBlogById = createAsyncThunk<Blog, string>(
  "blogs/fetchBlogById",
  async (blogId) => {
    const url = BASE_URL + blogId;
    const response = await axios.get<Blog>(url);
    return response.data;
  }
);

const fetchBlogs = createAsyncThunk<Blog[], void>(
  "blogs/fetchBlogs",
  async () => {
    const response = await axios.get<Blog[]>(BASE_URL);
    return response.data;
  }
);

const createBlog = createAsyncThunk<Blog, BlogData>(
  "blogs/createBlog",
  async (blog) => {
    const response = await axios.post<Blog>(BASE_URL, blog);
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
      })
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs.push(action.payload);
        toast({
          title: "Success",
          description: "Blog created successfully",
          duration: 3000,
        });
      })
      .addCase(createBlog.rejected, (state, action) => {
        toast({
          title: "Error",
          description: "Something went wrong while creating the blog",
          duration: 3000,
        });
      });
  },
});

export { createBlog, fetchBlogById, fetchBlogs };
export const { clearSelectedBlog } = commentsSlice.actions;
export default commentsSlice.reducer;
