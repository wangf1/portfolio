"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/lib/redux/blog/blogsSlice";
import { useEffect } from "react";

export default function BlogList() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const status = useAppSelector((state) => state.blogs.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
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

  return <div>BlogList</div>;
}
