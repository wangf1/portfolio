import blogController from "@/src/blog/blogController";
import { NextRequest } from "next/server";

type Params = {
  id: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  const blogId = context.params.id;
  return blogController.getBlogById(blogId);
}
