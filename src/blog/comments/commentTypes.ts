export interface BlogComment {
  id: string;
  postId: string;
  text: string;
  author: string;
}

export interface BlogCommentState {
  blogComments: BlogComment[];
  status: "idle" | "loading" | "failed";
}
