import mongoose, { Document, Schema } from "mongoose";

interface IComment extends Document {
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

const BlogComment =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);

export default BlogComment;

export type { IComment };
