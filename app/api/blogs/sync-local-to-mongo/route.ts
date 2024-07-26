import { isAdmin } from "@/lib/auth/authorization";
import blogController from "@/src/blog/blogController";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({ ok: true });
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient().users.getUser(userId) : null;

  if (!isAdmin(user)) {
    return Response.json(
      { error: `Only author of this website can create new blog.` },
      { status: 403 }
    );
  }
  return blogController.syncAllLocalBlogsToMongo();
}
