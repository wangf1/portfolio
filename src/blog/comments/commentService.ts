// src/services/commentService.ts

import connectToMongoDb from "@/lib/mongodb";
import Comment from "@/src/blog/comments/commentModel";

interface CommentData {
  postId: string;
  text: string;
  author: string;
}

const getCommentsByPostId = async (postId: string) => {
  await connectToMongoDb();
  return Comment.find({ postId });
};

const createComment = async (commentData: CommentData) => {
  await connectToMongoDb();
  const newComment = new Comment(commentData);
  return newComment.save();
};

export default {
  getCommentsByPostId,
  createComment,
};
