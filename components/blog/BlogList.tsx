"use client";
import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { BlogSummaryCard } from "@/components/blog/BlogSummaryCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/lib/redux/blog/blogsSlice";
import { Box, Skeleton } from "@mui/material";
import { useEffect } from "react";

export default function BlogList() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const status = useAppSelector((state) => state.blogs.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (status === "loading") {
    return (
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Skeleton
              key={index}
              variant="rectangular"
              width={210}
              height={118}
              className="animate-pulse"
            />
          </Box>
        ))}
      </>
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
      <div>
        {blogs.map((post) => {
          return (
            <BlogSummaryCard
              key={post._id}
              blog={post}
              parentPath={BLOG_V2_PATH}
              className="max-w-3xl"
            />
          );
        })}
      </div>
    </div>
  );
}
