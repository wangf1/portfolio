import commentService from "@/backend/blog/comments/commentService";
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

    let { author, text } = await req.json();
    if (!author || !text) {
      return new Response("authorName and commentBody are required", {
        status: 400,
      });
    }

    // TODO: before sign up function available, use IP as the author name
    const ip = req.ip || req.headers.get("x-real-ip");

    // If the above methods don't work, you can try these fallbacks
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = ip ?? forwardedFor?.split(",")[0] ?? "Unknown";

    author = clientIp;

    const createdComment = await commentService.createComment({
      blogId,
      author,
      text,
    });
    return Response.json(createdComment, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Error creating comment" }, { status: 500 });
  }
};

export default {
  getComments,
  createComment,
};
