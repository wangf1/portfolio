"use client";

import { exampleMarkdown } from "@/app/admin/blog-editor/example_markdown_content";
import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { BlogData } from "@/common/types/blog/blogTypes";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import {
  createBlog,
  syncLocalBlogsToMongo,
} from "@/frontend/lib/redux/blog/blogsSlice";
import { Button } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MarkdownEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [content, setContent] = useState<string>(exampleMarkdown);
  const [isPinned, setIsPinned] = useState<boolean>(false);

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
      readableId: title.replaceAll(" ", "_").toLowerCase(),
      summary,
      tags: tags.split(",").map((tag) => tag.trim()),
      isPinned,
      content,
    };
    dispatch(createBlog(blogData));
  };
  const handleSync = () => {
    dispatch(syncLocalBlogsToMongo());
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
          <label htmlFor="summary">Summary</label>
          <input
            id="summary"
            className="mb-4 bg-transparent border-gray-300 border-b border-0"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            className="mb-4 bg-transparent border-gray-300 border-b border-0"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <label htmlFor="pinned">Pinned</label>
          <input
            id="pinned"
            type="checkbox"
            checked={isPinned}
            onChange={(e) => setIsPinned(e.target.checked)}
          />
        </div>
        <MDEditor
          value={content}
          onChange={(value) => setContent(value || "")}
          height={500}
          className="mb-4"
        />
        <div className="flex justify-end space-x-2">
          <Button variant="contained" color="primary" onClick={handleSync}>
            Sync Local Blogs to Mongo
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
