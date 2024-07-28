import BlogDAO from "@/backend/blog/blogModel";
import {
  Blog,
  BlogCreationData,
  BlogQueryParams,
  Blog as BlogType,
} from "@/common/types/blog/blogTypes";
import connectToMongoDb from "@/frontend/lib/mongodb";
import { getLocalBlogs } from "@/frontend/lib/redux/blog/localBlogs";

const getBlogs = async ({
  skip,
  take,
  tags,
}: BlogQueryParams): Promise<BlogType[]> => {
  await connectToMongoDb();
  const query = BlogDAO.find({})
    .select("-content")
    .sort({ isPinned: -1, date: -1 })
    .skip(skip)
    .limit(take);
  if (tags && tags.length > 0) {
    const regexTags = tags.map((tag) => new RegExp(`^${tag}$`, "i"));
    query.where({ tags: { $in: regexTags } });
  }
  return await query.exec();
};

const getBlogById = async (blogId: string): Promise<BlogType> => {
  await connectToMongoDb();
  const blog = await BlogDAO.findOne({ _id: blogId });
  return blog;
};

const createBlog = async (data: BlogCreationData): Promise<Blog> => {
  await connectToMongoDb();

  const newBlog = new BlogDAO({
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
    const existing = await BlogDAO.findOne({ readableId: blog.readableId })
      .select("_id, readableId")
      .lean();
    if (!existing) {
      total++;
      await BlogDAO.create(blog);
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
