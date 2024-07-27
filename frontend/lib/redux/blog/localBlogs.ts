import { Blog } from "@/common/types/blog/blogTypes";
import blog_leetcode_necessity from "@/data/static_blog/2024-07-17_leetcode_necessity";
import blog_dial_pad from "@/data/static_blog/2024-07-18_dial_pad";
import blog_social_media from "@/data/static_blog/2024-07-19_initial_design_social_media";
import blog_some_thoughts from "@/data/static_blog/2024-07-25_some_thoughts";
import blog_my_immigration_story from "@/data/static_blog/my-immigration-story";

const staticBlogsMap: { [key: string]: Blog } = {
  "2024-07-17_leetcode_necessity": blog_leetcode_necessity,
  "2024-07-18_dial_pad": blog_dial_pad,
  "2024-07-19_initial_design_social_media": blog_social_media,
  "my-immigration-story": blog_my_immigration_story,
  "2024-07-25_some_thoughts": blog_some_thoughts,
};

export const getLocalBlogById = (blogId: string): Blog => {
  return staticBlogsMap[blogId];
};

export const getLocalBlogs = (): Blog[] => {
  const localBlogs = Object.values(staticBlogsMap);
  localBlogs.sort((a, b) => {
    if (a.isPinned !== b.isPinned) {
      return a.isPinned ? -1 : 1;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return localBlogs;
};
