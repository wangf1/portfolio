import { Blog } from "@/common/types/blog/blogTypes";
import { randomMongoDocId } from "@/frontend/lib/utils";

const blog: Blog = {
  _id: randomMongoDocId(),
  readableId: "2024-07-17_leetcode_necessity",
  title: "About Practicing on LeetCode",
  tags: ["Thoughts", "Programming", "LeetCode"],
  date: new Date("2024-07-17T17:37:53Z"),
  summary: "Should I do practice on LeetCode?",
  content: `
### Is it Necessary for Programmers to Practice on LeetCode if Not Preparing for Interviews?

<div 
  className="dark:text-blue-200 text-blue-950 text-lg 
    shadow-xl shadow-gray-900 dark:shadow-gray-500 p-4"
>

I believe it is necessary. With the help of ChatGPT and Copilot, the demands on genuine coding skills in daily development work are decreasing.

Most of our daily work involves understanding requirements, configuring various development environments, and integrating third-party libraries to complete specific functions. Opportunities to use pure programming thinking to solve problems are rare.

Doing a medium-difficulty LeetCode problem every one or two days, without relying on any frameworks or tedious configurations, is a good exercise and a relaxing activity, reminding me that I am a programmer.

Additionally, some practices, such as various SQL basic skills and techniques, are not often focused on by application developers in their daily work. Most of the time, simple CRUD operations are done using ORM frameworks.

LeetCode allows for immediate SQL practice without any installation or configuration, making it very time-efficient and effective.

Unfortunately, most SQL problems require a paid membership to access. In the future, I might consider purchasing a LeetCode membership for a year or two.

<img
  src="/static/images/blog-images/leetcode-909.png"
  alt="LeetCode Problem 909"
  className="rotate-[-5deg] w-[850px] h-auto
    shadow-xl shadow-gray-900 dark:shadow-gray-500
    opacity-90"
/>

</div>
`,
};
export default blog;
