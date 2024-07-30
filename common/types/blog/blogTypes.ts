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

export type BlogCreationData = Omit<Blog, "_id" | "date">;

export interface BlogQueryParams {
  skip: number;
  take: number;
  tags?: string[];
}

export interface BlogState {
  blogs: Blog[];
  blogCount: number;
  selectedBlog?: Blog;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}
