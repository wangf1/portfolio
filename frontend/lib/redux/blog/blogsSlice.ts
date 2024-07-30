import {
  Blog,
  BlogCreationData,
  BlogQueryParams,
  BlogState,
} from "@/common/types/blog/blogTypes";
import { toast } from "@/frontend/ui/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: BlogState = {
  blogs: [],
  blogCount: 0,
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

const fetchBlogs = createAsyncThunk<Blog[], BlogQueryParams>(
  "blogs/fetchBlogs",
  async ({ skip, take, tags }: BlogQueryParams) => {
    const queryParams = new URLSearchParams({
      skip: skip.toString(),
      take: take.toString(),
      ...(tags && tags.length > 0 ? { tags: tags.join(",") } : {}),
    });

    const response = await axios.get<Blog[]>(`${BASE_URL}?${queryParams}`);
    return response.data;
  }
);

const fetchBlogCount = createAsyncThunk<number, void>(
  "blogs/fetchBlogCount",
  async () => {
    const response = await axios.get<number>(BASE_URL + "count");
    return response.data;
  }
);

const createBlog = createAsyncThunk<Blog, BlogCreationData>(
  "blogs/createBlog",
  async (blog) => {
    const response = await axios.post<Blog>(BASE_URL, blog);
    return response.data;
  }
);

const syncLocalBlogsToMongo = createAsyncThunk<
  { amountOfSyncedBlogs: number },
  void
>("blogs/syncLocalBlogsToMongo", async () => {
  const response = await axios.post(BASE_URL + "sync-local-to-mongo");
  return response.data;
});

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
      .addCase(fetchBlogCount.fulfilled, (state, action) => {
        state.blogCount = action.payload;
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
      })
      .addCase(syncLocalBlogsToMongo.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast({
          title: "Success",
          description: `Blog synced successfully. Number of synced blogs: ${action.payload.amountOfSyncedBlogs}`,
          duration: 3000,
        });
      });
  },
});

export {
  createBlog,
  fetchBlogById,
  fetchBlogCount,
  fetchBlogs,
  syncLocalBlogsToMongo,
};
export const { clearSelectedBlog } = commentsSlice.actions;
export default commentsSlice.reducer;
