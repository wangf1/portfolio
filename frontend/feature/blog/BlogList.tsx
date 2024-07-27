"use client";
import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { BlogSummaryCard } from "@/frontend/feature/blog/BlogSummaryCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import { fetchBlogs } from "@/frontend/lib/redux/blog/blogsSlice";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
const { nanoid } = require("nanoid");

export default function BlogList() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const status = useAppSelector((state) => state.blogs.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center animate-focusIn m-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={nanoid()} className="mb-2">
            <Skeleton
              key={nanoid}
              variant="rounded"
              width={600}
              height={118}
              animation="wave"
              sx={{ borderRadius: "16px" }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (status === "failed") {
    return <div>Failed to load blog, please try again.</div>;
  }

  if (!blogs) {
    return null;
  }

  blogs.map((blog) => {
    console.log(blog);
  });

  return (
    <div className="flex flex-col items-center animate-focusIn">
      {blogs.map((post) => {
        return (
          <BlogSummaryCard
            key={post._id}
            blog={post}
            parentPath={BLOG_V2_PATH}
            className="max-w-3xl w-full"
          />
        );
      })}
    </div>
  );
}
