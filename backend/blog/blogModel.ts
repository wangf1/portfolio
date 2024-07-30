import { Blog as BlogType } from "@/common/types/blog/blogTypes";
import mongoose, { Document, ObjectId, Schema } from "mongoose";

interface BlogDocument extends Document<ObjectId>, Omit<BlogType, "_id"> {}

const BlogSchema: Schema = new Schema({
  readableId: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  summary: { type: String, required: true },
  tags: { type: [String], required: true },
  content: { type: String, required: true },
  isPinned: { type: Boolean },
});

const BlogDAO =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", BlogSchema);

export default BlogDAO;
