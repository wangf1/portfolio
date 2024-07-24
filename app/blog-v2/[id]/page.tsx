import BlogRenderer from "@/components/blog/BlogRenderer";

export default function BlogDetailsPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  return (
    <div className="flex justify-center pb-20">
      <BlogRenderer blogId={params.id} />
    </div>
  );
}
