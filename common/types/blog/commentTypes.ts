export interface BlogComment {
  _id: string;
  postId: string;
  text: string;
  author: string;
  date: Date;
}

export interface BlogCommentState {
  blogComments: BlogComment[];
  status: "idle" | "loading" | "failed";
}
