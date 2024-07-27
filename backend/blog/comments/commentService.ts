import BlogCommentDAO from "@/backend/blog/comments/commentModel";
import { BlogComment } from "@/common/types/blog/commentTypes";
import connectToMongoDb from "@/frontend/lib/mongodb";

interface CommentData {
  blogId: string;
  text: string;
  author: string;
}

const getCommentsByBlogId = async (blogId: string) => {
  await connectToMongoDb();
  return BlogCommentDAO.find({ blogId });
};

const createComment = async (
  commentData: CommentData
): Promise<{
  addedComment: BlogComment;
  deletedComment: BlogComment;
}> => {
  await connectToMongoDb();
  const newComment = new BlogCommentDAO({
    ...commentData,
    date: new Date().toISOString(),
  });
  await newComment.save();

  let oldestComment: any = null;
  const totalComments = await BlogCommentDAO.countDocuments();
  if (totalComments > 5) {
    oldestComment = await BlogCommentDAO.findOne().sort({ date: 1 });
    if (oldestComment !== null) {
      await BlogCommentDAO.deleteOne({ _id: oldestComment._id });
    }
  }

  return {
    addedComment: newComment,
    deletedComment: oldestComment,
  };
};

export default {
  getCommentsByBlogId,
  createComment,
};
