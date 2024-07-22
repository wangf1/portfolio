import commentController from "@/src/blog/comments/commentController";
import { NextRequest } from "next/server";

type Params = {
  id: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  const blogId = context.params.id;
  return commentController.getComments(req, blogId);
}

export async function POST(req: NextRequest, context: { params: Params }) {
  const blogId = context.params.id;
  return commentController.createComment(req, blogId);
}
