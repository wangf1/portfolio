"use client";
import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { BlogSummaryCard } from "@/frontend/feature/blog/BlogSummaryCard";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import {
  fetchBlogCount,
  fetchBlogs,
} from "@/frontend/lib/redux/blog/blogsSlice";
import { Pagination, Skeleton, Stack } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function BlogList() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const status = useAppSelector((state) => state.blogs.status);
  const blogCount = useAppSelector((state) => state.blogs.blogCount);
  const dispatch = useAppDispatch();

  // In future may allow user choose page size, but for now is is not a priority
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchBlogs({ skip: (currentPage - 1) * pageSize, take: pageSize })
    );
    dispatch(fetchBlogCount());
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center animate-focusIn m-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={nanoid()} className="mb-2">
            <Skeleton
              key={nanoid()}
              variant="rounded"
              width={800}
              height={170}
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

  return (
    <div className="flex flex-col items-center animate-focusIn my-8">
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
      <Stack spacing={2} className="mt-4">
        <Pagination
          count={Math.ceil(blogCount / pageSize)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
