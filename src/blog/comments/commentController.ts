import commentService from "@/src/blog/comments/commentService";
import { NextRequest } from "next/server";

const getComments = async (req: NextRequest, blogId: string) => {
  try {
    if (!blogId) {
      return new Response("blogId is required", { status: 400 });
    }
    const comments = await commentService.getCommentsByBlogId(blogId);
    return Response.json(comments);
  } catch (error) {
    console.log(error);
    return new Response("Error fetching comments", {
      status: 500,
    });
  }
};

const createComment = async (req: NextRequest, blogId: string) => {
  try {
    if (!blogId) {
      return new Response("blogId is required", { status: 400 });
    }

    const { author, comment } = await req.json();
    if (!author || !comment) {
      return new Response("authorName and commentBody are required", {
        status: 400,
      });
    }

    const createdComment = await commentService.createComment({
      blogId,
      author,
      text: comment,
    });
    return Response.json(createdComment, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error creating comment" }, { status: 500 });
  }
};

export default {
  getComments,
  createComment,
};
