import connectToMongoDb from "@/lib/mongodb";
import { Blog } from "@/src/blog/blogTypes";

import blog_leetcode_necessity from "@/data/static_blog/2024-07-17_leetcode_necessity";
import blog_dial_pad from "@/data/static_blog/2024-07-18_dial_pad";
import blog_social_media from "@/data/static_blog/2024-07-19_initial_design_social_media";
import blog_my_immigration_story from "@/data/static_blog/my-immigration-story";

const staticBlogsMap = {
  "2024-07-17_leetcode_necessity": blog_leetcode_necessity,
  "2024-07-18_dial_pad": blog_dial_pad,
  "2024-07-19_initial_design_social_media": blog_social_media,
  "my-immigration-story": blog_my_immigration_story,
};

const getBlogs = async (skip: number, take: number): Promise<Blog[]> => {
  await connectToMongoDb();
  // TODO implement
  return Object.values(staticBlogsMap).slice(skip, skip + take);
};

const getBlogById = async (blogId: string): Promise<Blog> => {
  // TODO implement
  await connectToMongoDb();
  return staticBlogsMap[blogId];
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
