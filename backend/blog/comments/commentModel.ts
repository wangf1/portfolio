import mongoose, { Document, Schema } from "mongoose";

interface BlogCommentDocument extends Document {
  blogId: string;
  text: string;
  author: string;
  date: string;
}

const CommentSchema: Schema = new Schema({
  blogId: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
});

const BlogCommentDAO =
  mongoose.models.Comment ||
  mongoose.model<BlogCommentDocument>("Comment", CommentSchema);

export default BlogCommentDAO;
