import { customAlphabet } from "nanoid";

export function randomMongoDocId() {
  const afAF09 = "abcdefABCDEF0123456789";
  const nanoid = customAlphabet(afAF09, 24);
  const mongoDocId = nanoid();
  return mongoDocId;
}
