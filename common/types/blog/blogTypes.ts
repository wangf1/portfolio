export interface Blog {
  _id: string;
  readableId: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  isPinned?: boolean;
}

export type BlogData = Omit<Blog, "_id" | "date">;

export interface BlogState {
  blogs: Blog[];
  selectedBlog?: Blog;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}
