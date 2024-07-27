import { Short } from "@/common/types/short/shortTypes";
import mongoose, { Document, ObjectId, Schema } from "mongoose";

interface ShortDocument extends Document<ObjectId>, Omit<Short, "_id"> {}

const ShortSchema: Schema = new Schema({
  date: { type: String, required: true },
  tags: { type: [String], required: true },
  content: { type: String, required: true },
  isPinned: { type: Boolean },
});

const ShortDAO =
  mongoose.models.Short || mongoose.model<ShortDocument>("Short", ShortSchema);

export default ShortDAO;
