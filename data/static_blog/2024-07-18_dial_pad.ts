import { Blog } from "@/src/blog/blogTypes";

const blog: Blog = {
  _id: "2024-07-18_dial_pad",
  title: "A small dial pad",
  date: "2024-07-18T19:11:08Z",
  tags: ["React", "Programming", "Tailwind", "Redux"],
  summary: "A small dial pad implemented with React, Tailwind CSS, and Redux.",
  content: `
### Build a small UI use Web technology is interesting

<div 
  className="dark:text-green-100 text-blue-950 text-lg 
    shadow-xl shadow-gray-900 dark:shadow-gray-500 p-4"
>

This UI is a small dial pad implemented with React, Tailwind CSS, and Redux.
In my opinion, it looks better than the iPhone's dial pad.

TypeScript and the web front-end tech stack are quite capable. For example, VS
Code is built on these technologies, with a sophisticated UI and excellent
usability.

I completed it in 10 hours. Since my experience is more in Java backend
development, I needed to reference a lot of sample code snippets to make it
work. For a well-experienced front-end developer, maybe 4 hours would suffice.

It focuses primarily on the UI with limited functionality. If using React
Native for a fully functional dial pad frontend, I estimate it would take at
least 10 days.

Software development largely involves reading, understanding, mimicking, and
tailoring sample code to meet my own needs.

<span className="text-orange-900 dark:text-orange-100">
  Here is the [live demo](https://f43fcc6d.vercel.app/). Here is the
  [code](https://github.com/wangf1/f43fcc6d).
</span>

<img
  src="/static/images/blog-images/dial_pad.png"
  alt="LeetCode Problem 909"
  className="rotate-[5deg] w-96 h-auto
    shadow-xl shadow-gray-900 dark:shadow-gray-500
    opacity-90"
/>

</div>
`,
};

export default blog;
