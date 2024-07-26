import connectToMongoDb from "@/lib/mongodb";
import { getLocalBlogById, getLocalBlogs } from "@/lib/redux/blog/localBlogs";
import Blog, { IBlog } from "@/src/blog/blogModel";
import { BlogData, Blog as BlogObj } from "@/src/blog/blogTypes";

const getBlogs = async (skip: number, take: number): Promise<BlogObj[]> => {
  await connectToMongoDb();
  // TODO implement
  const blogs = getLocalBlogs().slice(skip, skip + take);
  return blogs;
};

const getBlogById = async (blogId: string): Promise<BlogObj> => {
  // TODO implement
  await connectToMongoDb();
  return getLocalBlogById(blogId);
};

const createBlog = async (data: BlogData): Promise<IBlog> => {
  await connectToMongoDb();

  const newBlog = new Blog({
    ...data,
    date: new Date().toISOString(),
  });

  await newBlog.save();
  return newBlog;
};

export default {
  getBlogs,
  getBlogById,
  createBlog,
};
