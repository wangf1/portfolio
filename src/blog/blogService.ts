import connectToMongoDb from "@/lib/mongodb";
import { getLocalBlogById, getLocalBlogs } from "@/lib/redux/blog/localBlogs";
import { Blog } from "@/src/blog/blogTypes";

const getBlogs = async (skip: number, take: number): Promise<Blog[]> => {
  await connectToMongoDb();
  // TODO implement
  const blogs = getLocalBlogs().slice(skip, skip + take);
  return blogs;
};

const getBlogById = async (blogId: string): Promise<Blog> => {
  // TODO implement
  await connectToMongoDb();
  return getLocalBlogById(blogId);
};

const createBlog = async (content: string, tags: string[]) => {
  await connectToMongoDb();
  // TODO implement
};

export default {
  getBlogs,
  getBlogById,
  createBlog,
};
