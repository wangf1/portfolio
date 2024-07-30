import ShortDAO from "@/backend/short/shortModel";
import { Short, ShortCreationData } from "@/common/types/short/shortTypes";
import connectToMongoDb from "@/frontend/lib/mongodb";

const getShorts = async (
  skip: number,
  take: number,
  tags?: string[]
): Promise<Short[]> => {
  await connectToMongoDb();
  const query = ShortDAO.find({})
    // Sort by isPinned (pinned items appear first) and date (newest first)
    .sort({ isPinned: -1, date: -1 })
    .skip(skip)
    .limit(take);

  if (tags && tags.length > 0) {
    const regexTags = tags.map((tag) => new RegExp(`^${tag}$`, "i"));
    query.where({ tags: { $in: regexTags } });
  }

  return await query.exec();
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

const updateThumbs = async (shortId: string, isThumbUp: boolean) => {
  await connectToMongoDb();

  // Find and update the document
  const update = isThumbUp
    ? { $inc: { thumbUps: 1 } }
    : { $inc: { thumbDowns: 1 } };

  // Ensure `ShortDAO.findByIdAndUpdate` is awaited
  const updatedShort = await ShortDAO.findByIdAndUpdate(shortId, update, {
    new: true,
  });

  return updatedShort;
};

export default {
  getShorts,
  createShort,
  updateThumbs,
};
