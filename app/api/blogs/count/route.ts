import blogController from "@/backend/blog/blogController";

export async function GET(): Promise<Response> {
  return blogController.getBlogCount();
}
