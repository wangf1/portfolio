export interface Short {
  _id: string;
  date: string;
  tags: string[];
  content: string;
  isPinned?: boolean;
}

export type ShortCreationData = Omit<Short, "_id" | "date">;

export interface ShortQueryParams {
  skip: number;
  take: number;
  tags?: string[];
}

export interface ShortState {
  shorts: Short[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

export const batchSize = 10;
