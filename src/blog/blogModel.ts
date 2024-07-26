import mongoose, { Document, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  isPinned?: boolean;
}

const BlogSchema: Schema = new Schema({
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
