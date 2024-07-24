import blogController from "@/src/blog/blogController";
import { NextRequest } from "next/server";

// Related document for how to get query params:
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const skipStr = searchParams.get("skip");
  const takeStr = searchParams.get("take");
  const skip = parseInt(skipStr ?? "0", 10);
  const take = parseInt(takeStr ?? "10", 10);

  if (isNaN(skip) || isNaN(take) || skip < 0 || take <= 0) {
    return Response.json(
      { error: `Invalid query parameters: skip=${skipStr}, take=${takeStr}` },
      { status: 400 }
    );
  }
  return blogController.getBlogs(skip, take);
}
