import connectToMongoDb from "@/lib/mongodb";
import BlogComment, { IComment } from "@/src/blog/comments/commentModel";

interface CommentData {
  blogId: string;
  text: string;
  author: string;
}

const getCommentsByBlogId = async (blogId: string) => {
  await connectToMongoDb();
  return BlogComment.find({ blogId });
};

const createComment = async (
  commentData: CommentData
): Promise<{
  addedComment: IComment;
  deletedComment: IComment;
}> => {
  await connectToMongoDb();
  const newComment = new BlogComment({
    ...commentData,
    date: new Date().toISOString(),
  });
  await newComment.save();

  let oldestComment: any = null;
  const totalComments = await BlogComment.countDocuments();
  if (totalComments > 5) {
    oldestComment = await BlogComment.findOne().sort({ date: 1 });
    if (oldestComment !== null) {
      await BlogComment.deleteOne({ _id: oldestComment._id });
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
