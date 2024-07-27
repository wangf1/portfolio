export interface BlogComment {
  _id: string;
  postId: string;
  text: string;
  author: string;
  date: string;
}

export interface BlogCommentState {
  blogComments: BlogComment[];
  status: "idle" | "loading" | "failed";
}
