"use client";
import { MarkdownRenderer } from "@/components/common/MarkdownRender";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogById } from "@/lib/redux/blog/blogsSlice";
import { format } from "date-fns";
import { useEffect } from "react";

interface BlogRendererProps {
  blogId: string;
}

export default function BlogRenderer({ blogId }: BlogRendererProps) {
  const blog = useAppSelector((state) => state.blogs.selectedBlog);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose dark:prose-invert">
      <h1 className="text-4xl text-center">{blog.title}</h1>
      <div className="text-right">
        {format(blog.publishedDate, "MMM. d, yyyy HH:mm:ss")}
      </div>
      <hr />
      <div>
        <MarkdownRenderer content={blog.content} />
      </div>
    </div>
  );
}
