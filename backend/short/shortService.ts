import ShortDAO from "@/backend/short/shortModel";
import { Short, ShortCreationData } from "@/common/types/short/shortTypes";
import connectToMongoDb from "@/frontend/lib/mongodb";
import { PipelineStage } from "mongoose";

const getShorts = async (
  skip: number,
  take: number,
  tags?: string[]
): Promise<Short[]> => {
  await connectToMongoDb();

  const matchTag =
    tags && tags.length > 0
      ? [
          {
            $match: {
              tags: {
                $in: tags.map((tag) => new RegExp(`^${tag}$`, "i")),
              },
            },
          },
        ]
      : [];

  const aggregationPipeline: PipelineStage[] = [
    ...matchTag,

    // Add a temporary date field for sorting
    {
      $addFields: {
        sortDate: {
          $cond: {
            if: { $eq: ["$isPinned", true] },
            then: "$date",
            else: {
              $subtract: [new Date("2099-12-31T00:00:00Z"), "$date"],
            },
          },
        },
      },
    },

    // Sort by the temporary field
    {
      $sort: {
        isPinned: -1,
        sortDate: 1,
      },
    },

    // Remove the temporary field
    {
      $project: {
        sortDate: 0,
      },
    },

    { $skip: skip },
    { $limit: take },
  ];
  return await ShortDAO.aggregate(aggregationPipeline).exec();
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
