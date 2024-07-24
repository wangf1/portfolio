"use client";

import BlogRenderer from "@/components/blog/BlogRenderer";

export default function BlogEditPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex justify-center pb-20">
      <BlogRenderer blogId={params.id} />
    </div>
  );
}
