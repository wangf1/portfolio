// src/services/commentService.ts

import connectToMongoDb from "@/lib/mongodb";
import Comment from "@/src/blog/comments/commentModel";

interface CommentData {
  blogId: string;
  text: string;
  author: string;
}

const getCommentsByBlogId = async (blogId: string) => {
  await connectToMongoDb();
  return Comment.find({ blogId });
};

const createComment = async (commentData: CommentData) => {
  await connectToMongoDb();
  const newComment = new Comment(commentData);
  return newComment.save();
};

export default {
  getCommentsByBlogId,
  createComment,
};
