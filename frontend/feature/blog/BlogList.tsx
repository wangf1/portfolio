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
  const blogs = useAppSelector((state) => state.blogs.blogsForCurrentPage);
  const status = useAppSelector((state) => state.blogs.status);
  const blogCount = useAppSelector((state) => state.blogs.blogCount);
  const dispatch = useAppDispatch();

  // In future may allow user choose page size, but for now is is not a priority
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBlogCount());
  }, [currentPage]);

  useEffect(() => {
    dispatch(
      fetchBlogs({ skip: (currentPage - 1) * pageSize, take: pageSize })
    );
  }, [blogCount, currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center animate-focusIn m-4">
        <div className="text-center mb-4 text-gray-700 dark:text-gray-500">
          Fetching data from a{" "}
          <strong className="text-green-500">free shared</strong> MongoDB Atlas
          instance, so... 😅 ⏳🕺🎉
        </div>

        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={nanoid()}
            className="w-full w-1/1 lg:w-1/2 2xl:w-1/3 p-2 mx-4 
                        max-w-[600px] animate-focusIn"
          >
            <Skeleton
              key={nanoid()}
              variant="rounded"
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
