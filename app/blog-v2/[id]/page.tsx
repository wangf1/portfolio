import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import BlogRenderer from "@/components/blog/BlogRenderer";
import BlogComments from "@/components/blog/comments/BlogComments";

export default function BlogDetailsPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return (
    <div className="flex flex-col items-center pt-10 pb-20">
      <BlogRenderer blogId={params.id} parentPath={BLOG_V2_PATH} />
      <BlogComments blogId={params.id} />
    </div>
  );
}
