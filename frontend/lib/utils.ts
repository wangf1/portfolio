import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { customAlphabet } from "nanoid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomMongoDocId() {
  const afAF09 = "abcdefABCDEF0123456789";
  const nanoid = customAlphabet(afAF09, 24);
  const mongoDocId = nanoid();
  return mongoDocId;
}
