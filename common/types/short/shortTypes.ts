export interface Short {
  _id: string;
  date: Date;
  tags: string[];
  content: string;
  isPinned?: boolean;
  thumbUps?: number;
  thumbDowns?: number;
}

export type ShortCreationData = Omit<Short, "_id" | "date">;

export interface ShortQueryParams {
  skip: number;
  take: number;
  tags?: string[];
}

export interface ShortState {
  shorts: Short[];
  shortsCount: number;
  status: "idle" | "loading" | "fetching_shorts" | "succeeded" | "failed";
  error?: string;
}

export const batchSize = 10;
