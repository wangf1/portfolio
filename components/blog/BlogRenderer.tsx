"use client";
import BlogComments from "@/components/blog/comments/BlogComments";
import { MarkdownRenderer } from "@/components/common/MarkdownRender";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBlogById } from "@/lib/redux/blog/blogsSlice";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface BlogRendererProps {
  blogId: string;
  parentPath: string;
}

export default function BlogRenderer({
  blogId,
  parentPath,
}: Readonly<BlogRendererProps>) {
  const blog = useAppSelector((state) => state.blogs.selectedBlog);
  const status = useAppSelector((state) => state.blogs.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
  }, [blogId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load blog, please try again.</div>;
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="prose dark:prose-invert">
      <Link href={parentPath} className="w-full flex items-start">
        <Button
          variant="text"
          sx={{
            borderRadius: "16px",
          }}
        >
          <MoveLeftIcon size={35} />
        </Button>
      </Link>
      <h1 className="text-4xl text-center">{blog.title}</h1>
      <div className="text-right">
        {format(blog.date, "MMM. d, yyyy HH:mm:ss")}
      </div>
      <hr />
      <div>
        <MarkdownRenderer content={blog.content} />
      </div>
      <BlogComments blogId={blogId} />
    </div>
  );
}
