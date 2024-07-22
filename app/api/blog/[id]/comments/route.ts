import commentController from "@/src/blog/comments/commentController";
import { NextRequest } from "next/server";

type Params = {
  id: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  const postId = context.params.id;
  return commentController.getComments(req, postId);
}

export async function POST(req: NextRequest, context: { params: Params }) {
  const postId = context.params.id;
  return commentController.createComment(req, postId);
}
