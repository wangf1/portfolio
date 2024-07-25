export interface Blog {
  _id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  isPinned?: boolean;
}

export interface BlogState {
  blogs: Blog[];
  selectedBlog?: Blog;
  status: "idle" | "loading" | "failed";
  error?: string;
}
