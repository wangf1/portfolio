import connectToMongoDb from "@/lib/mongodb";
import { getLocalBlogs } from "@/lib/redux/blog/localBlogs";
import Blog, { IBlog } from "@/src/blog/blogModel";
import { BlogData, Blog as BlogType } from "@/src/blog/blogTypes";

const getBlogs = async (skip: number, take: number): Promise<BlogType[]> => {
  await connectToMongoDb();
  const blogs = await Blog.find({})
    .select("-content")
    .sort({ isPinned: -1, date: -1 })
    .skip(skip)
    .limit(take);
  return blogs;
};

const getBlogById = async (blogId: string): Promise<BlogType> => {
  await connectToMongoDb();
  const blog = await Blog.findOne({ _id: blogId });
  return blog;
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

const syncAllLocalBlogsToMongo = async (): Promise<number> => {
  let total = 0;
  await connectToMongoDb();
  const localBlogs = getLocalBlogs();
  for (const blog of localBlogs) {
    const existing = await Blog.findOne({ readableId: blog.readableId })
      .select("_id, readableId")
      .lean();
    if (!existing) {
      total++;
      await Blog.create(blog);
    }
  }
  return total;
};

export default {
  getBlogs,
  getBlogById,
  createBlog,
  syncAllLocalBlogsToMongo,
};
