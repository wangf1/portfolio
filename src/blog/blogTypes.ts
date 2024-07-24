export interface Blog {
  _id: string;
  title: string;
  publishedDate: string;
  summary: string;
  tags: string[];
  content: string;
}

export interface BlogState {
  blogs: Blog[];
  selectedBlog?: Blog;
  status: "idle" | "loading" | "failed";
  error?: string;
}
