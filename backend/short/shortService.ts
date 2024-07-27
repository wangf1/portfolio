import ShortDAO from "@/backend/short/shortModel";
import { Short, ShortCreationData } from "@/common/types/short/shortTypes";
import connectToMongoDb from "@/frontend/lib/mongodb";

const getShorts = async (skip: number, take: number): Promise<Short[]> => {
  await connectToMongoDb();
  const shorts = await ShortDAO.find({})
    .select("-content")
    .sort({ isPinned: -1, date: -1 })
    .skip(skip)
    .limit(take);
  return shorts;
};

const createShort = async (data: ShortCreationData): Promise<Short> => {
  await connectToMongoDb();

  const newShort = new ShortDAO({
    ...data,
    date: new Date().toISOString(),
  });

  await newShort.save();
  return newShort;
};

export default {
  getShorts,
  createShort,
};
