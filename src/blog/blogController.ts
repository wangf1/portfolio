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

const getBlogs = async (skip: number, take: number) => {
  try {
    const blogs = await blogService.getBlogs(skip, take);
    return Response.json(blogs);
  } catch (error) {
    console.log(error);
    return new Response("Error fetching comments", {
      status: 500,
    });
  }
};

const createBlog = async (req: Request) => {
  try {
    const body = await req.json();
    const blog = await blogService.createBlog(body);
    return Response.json(blog);
  } catch (error) {
    console.log(error);
    return new Response("Error creating blog", {
      status: 500,
    });
  }
};

const syncAllLocalBlogsToMongo = async (): Promise<Response> => {
  try {
    const amountOfSyncedBlogs = await blogService.syncAllLocalBlogsToMongo();
    return Response.json({ amountOfSyncedBlogs });
  } catch (error) {
    console.log(error);
    return new Response("Error syncing blogs", {
      status: 500,
    });
  }
};

export default {
  getBlogById,
  getBlogs,
  createBlog,
  syncAllLocalBlogsToMongo,
};
