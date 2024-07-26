"use client";

import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createBlog } from "@/lib/redux/blog/blogsSlice";
import { BlogData } from "@/src/blog/blogTypes";
import { Button } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const exampleMarkdown = `
A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |

  Here is some JavaScript code:
  ~~~js
  let code = 'This is a code block';
  ~~~
  # Heading 1
  ## Heading 2
  ### Heading 3
  This is a paragraph with some **bold text** and _italic text_.

  - List item 1
  - List item 2
  - List item 3

  1. Ordered item 1
  2. Ordered item 2
  3. Ordered item 3

  > This is a blockquote.

  \`\`\`javascript
  const codeBlock = 'This is a code block';
  console.log(codeBlock);
  \`\`\`

  [This is a link](https://example.com)
`;

const MarkdownEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [content, setContent] = useState<string>(exampleMarkdown);

  const dispatch = useAppDispatch();

  const router = useRouter();
  const blogCreationStatus = useAppSelector((state) => state.blogs.status);

  useEffect(() => {
    if (blogCreationStatus === "succeeded") {
      // Redirect to the blog list page
      router.push(BLOG_V2_PATH);
    }
  }, [blogCreationStatus, router, dispatch]);

  const handleSave = () => {
    const blogData: BlogData = {
      title,
      summary,
      tags: tags.split(",").map((tag) => tag.trim()),
      content,
    };
    dispatch(createBlog(blogData));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <h1 className="mb-4 text-2xl font-bold">Title</h1>
          <input
            className="mb-4 bg-transparent border-gray-300 border-b border-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <label>Summary</label>
          <input
            className="mb-4 bg-transparent border-gray-300 border-b border-0"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <label>Tags</label>
          <input
            className="mb-4 bg-transparent border-gray-300 border-b border-0"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <MDEditor
          value={content}
          onChange={(value) => setContent(value || "")}
          height={500}
          className="mb-4"
        />
        <div className="flex justify-end">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
