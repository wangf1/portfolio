import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isUnprotectedRoute = createRouteMatcher(["/api/blogs/(.+)/comments(.*)"]);
const blogsAPIRoute = createRouteMatcher(["/api/blogs/(.*)"]);
const isProtectedRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isUnprotectedRoute(req)) {
    return NextResponse.next();
  }
  if (isProtectedRoute(req)) {
    auth().protect();
    return NextResponse.next();
  }
  if (blogsAPIRoute(req)) {
    const { method } = req;
    if (method !== "GET") {
      auth().protect();
    }
    return NextResponse.next();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
