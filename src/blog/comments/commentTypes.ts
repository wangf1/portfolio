export interface Comment {
  id: string;
  postId: string;
  text: string;
  author: string;
}

export interface CommentState {
  comments: Comment[];
  status: "idle" | "loading" | "failed";
}
