import blogService from "@/src/blog/blogService";

const getBlogById = async (blogId: string) => {
  try {
    if (!blogId) {
      return new Response("blogId is required", { status: 400 });
    }
    const blog = await blogService.getBlogById(blogId);
    return Response.json(blog);
  } catch (error) {
    console.log(error);
    return new Response("Error fetching comments", {
      status: 500,
    });
  }
};

export default {
  getBlogById,
};
