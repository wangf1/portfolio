"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogs } from "@/lib/redux/blog/blogsSlice";
import { useEffect } from "react";

export default function BlogList() {
  const blogs = useAppSelector((state) => state.blogs.blogs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return <div>BlogList</div>;
}
