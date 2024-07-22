"use client";

import { Button } from "@/components/ui/button";
import { addComment } from "@/lib/redux/blog/comments/commentsSlice";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MessageSquarePlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

import "@/components/common/Tiptap.css";
import { toast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/lib/hooks";

interface TipTapProps {
  readonly?: boolean;
  author?: string;
  date?: string;
  text?: string;
  blogId?: string;
}

const Tiptap = ({
  readonly = false,
  author = "Unknown Author",
  date = new Date().toLocaleDateString(),
  text,
  blogId,
}: TipTapProps) => {
  const shouldShowAuthorDate = readonly;
  const shouldShowAddButton = !readonly;

  const [content, setContent] = useState<string | undefined>(text);
  const dispatch = useAppDispatch();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Add a comment ..." }),
    ],
    content,
    editable: !readonly,
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [content]);

  function onAddComment() {
    if (!blogId) {
      toast({
        title: "Error",
        description: "blogId is required",
        variant: "destructive",
      });
      return;
    }
    const comment = editor?.getHTML() ?? "";
    dispatch(
      addComment({
        author: "author",
        text: comment,
        blogId,
      })
    );
    return setContent("");
  }

  return (
    <div className="border border-gray-700 pl-4 rounded mt-6">
      <EditorContent editor={editor} />
      {shouldShowAuthorDate && (
        <footer
          className="w-full flex justify-end space-x-2
          text-gray-500 p-2"
        >
          <section>By: </section>
          <section className="font-bold">{author}</section>
          <section>Date:</section>
          <section className="font-bold">{date}</section>
        </footer>
      )}
      {shouldShowAddButton && (
        <div className="w-full flex justify-end">
          <Button
            onClick={onAddComment}
            variant={"ghost"}
            className="hover:bg-blue-500 rounded-xl active:bg-gray-500"
          >
            <MessageSquarePlusIcon className="mx-2" />
            Add Comment
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tiptap;
