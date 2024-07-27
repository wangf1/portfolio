import {
  BlogComment,
  BlogCommentState,
} from "@/common/types/blog/commentTypes";
import { toast } from "@/frontend/ui/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: BlogCommentState = {
  blogComments: [],
  status: "idle",
};

const BASE_URL = "/api/blogs/${blogId}/comments";

const fetchComments = createAsyncThunk<BlogComment[], string>(
  "comments/fetchComments",
  async (blogId) => {
    const url = BASE_URL.replace("${blogId}", blogId);
    const response = await axios.get<BlogComment[]>(url);
    return response.data;
  }
);

interface AddCommentResponse {
  addedComment: BlogComment;
  deletedComment: BlogComment | null;
}

const addComment = createAsyncThunk<
  AddCommentResponse,
  { author: string; text: string; blogId: string }
>("activities/updateComment", async ({ author, text, blogId }) => {
  const url = BASE_URL.replace("${blogId}", blogId);
  const response = await axios.post<AddCommentResponse>(url, { author, text });
  return response.data;
});

const commentsSlice = createSlice({
  name: "blogComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogComments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const addedComment = action.payload.addedComment;
        const deletedComment = action.payload.deletedComment;
        state.blogComments.push(addedComment);
        if (deletedComment) {
          state.blogComments = state.blogComments.filter(
            (comment) => comment._id !== deletedComment._id
          );
        }
        toast({
          title: "Information",
          description: "Comment added successfully",
          duration: 3000,
        });
      })
      .addCase(addComment.rejected, (state, action) => {
        console.log(`Error adding comment ${action.error.message}`);
      });
  },
});

export { addComment, fetchComments };
export default commentsSlice.reducer;
