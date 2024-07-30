"use client";

import { BLOG_V2_PATH } from "@/app/blog-v2/current_path";
import { SHORTS_PATH } from "@/app/shorts/shorts_path";
import { BlogCreationData } from "@/common/types/blog/blogTypes";
import { ShortCreationData } from "@/common/types/short/shortTypes";
import { exampleMarkdown } from "@/frontend/feature/blog/editor/example_markdown_content";
import { useAppDispatch, useAppSelector } from "@/frontend/lib/hooks";
import {
  createBlog,
  syncLocalBlogsToMongo,
} from "@/frontend/lib/redux/blog/blogsSlice";
import { createShort } from "@/frontend/lib/redux/short/shortsSlice";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function BlogAndShortEditor() {
  type PostType = "blog" | "short";

  const [postType, setPostType] = useState<PostType>("blog");
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [content, setContent] = useState<string>(exampleMarkdown);
  const [isPinned, setIsPinned] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const router = useRouter();
  const blogCreationStatus = useAppSelector((state) => state.blogs.status);
  const shortCreationStatus = useAppSelector((state) => state.shorts.status);

  useEffect(() => {
    if (blogCreationStatus === "succeeded") {
      // Redirect to the blog list page
      router.push(BLOG_V2_PATH);
    } else if (shortCreationStatus === "succeeded") {
      // Redirect to the short list page
      router.push(SHORTS_PATH);
    }
  }, [blogCreationStatus, shortCreationStatus]);

  const getNonEmptyTags = (tags: string) => {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
  };

  const saveBlog = async () => {
    const blogData: BlogCreationData = {
      title,
      readableId: title.replaceAll(" ", "_").toLowerCase(),
      summary,
      tags: getNonEmptyTags(tags),
      isPinned,
      content,
    };
    dispatch(createBlog(blogData));
  };

  const saveShort = async () => {
    const shortData: ShortCreationData = {
      tags: getNonEmptyTags(tags),
      isPinned,
      content,
    };
    dispatch(createShort(shortData));
  };

  const handleSave = () => {
    if (postType === "blog") {
      saveBlog();
    } else if (postType === "short") {
      saveShort();
    }
  };

  //I already done the sync, button no longer needed
  const needSyncButton = false;
  const handleSync = () => {
    dispatch(syncLocalBlogsToMongo());
  };

  function handlePostTypeChange(
    event: SelectChangeEvent<PostType>,
    child: ReactNode
  ): void {
    setPostType(event.target.value as PostType);
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex space-y-2 items-center space-x-4">
        <h1 className="text-xl font-bold">Post Type</h1>
        <Select
          value={postType}
          onChange={handlePostTypeChange}
          className="bg-transparent border-gray-300 border-b border-0"
        >
          <MenuItem value={"blog"}>Blog</MenuItem>
          <MenuItem value={"short"}>Short</MenuItem>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {postType === "blog" && (
          <>
            <div className="flex flex-col space-y-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                className="bg-transparent border-gray-300 border-b border-0"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="summary">Summary</label>
              <input
                id="summary"
                className="bg-transparent border-gray-300 border-b border-0"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="flex flex-col space-y-2">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            className="bg-transparent border-gray-300 border-b border-0"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="pinned">Pinned</label>
          <input
            id="pinned"
            type="checkbox"
            checked={isPinned}
            onChange={(e) => setIsPinned(e.target.checked)}
          />
        </div>
      </div>
      <MDEditor
        value={content}
        onChange={(value) => setContent(value || "")}
        height={500}
        className="mb-4"
      />
      <div className="flex justify-end space-x-2">
        {needSyncButton && (
          <Button variant="contained" color="primary" onClick={handleSync}>
            Sync Local Blogs to Mongo
          </Button>
        )}

        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
