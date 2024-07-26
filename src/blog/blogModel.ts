import { Blog as BlogType } from "@/src/blog/blogTypes";
import mongoose, { Document, ObjectId, Schema } from "mongoose";

interface IBlog extends Document<ObjectId>, Omit<BlogType, "_id"> {}

const BlogSchema: Schema = new Schema({
  readableId: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  summary: { type: String, required: true },
  tags: { type: [String], required: true },
  content: { type: String, required: true },
  isPinned: { type: Boolean },
});

const Blog = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;

export type { IBlog };
