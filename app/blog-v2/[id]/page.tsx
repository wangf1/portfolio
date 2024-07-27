import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import BlogRenderer from "@/frontend/feature/blog/BlogRenderer";

export default function BlogDetailsPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return (
    <div className="mx-auto max-w-3xl">
      <BlogRenderer blogId={params.id} parentPath={BLOG_V2_PATH} />
    </div>
  );
}
