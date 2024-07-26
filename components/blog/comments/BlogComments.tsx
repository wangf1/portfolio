"use client";

import Tiptap from "@/components/common/Tiptap";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchComments } from "@/lib/redux/blog/comments/commentsSlice";
import { useEffect } from "react";

interface BlogCommentsProps {
  blogId: string;
  className?: string;
}

export default function BlogComments({
  blogId,
  className,
}: Readonly<BlogCommentsProps>) {
  const blogComments = useAppSelector((state) => state.comments.blogComments);
  const blogCommentsStatus = useAppSelector((state) => state.comments.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments(blogId));
  }, [blogId]);

  if (blogCommentsStatus !== "idle") {
    return null;
  }

  return (
    <div className={className}>
      {blogComments.map((comment) => (
        <Tiptap
          key={comment._id}
          text={comment.text}
          author={comment.author}
          date={comment.date}
          readonly={true}
        />
      ))}
      <Tiptap blogId={blogId} />
    </div>
  );
}
