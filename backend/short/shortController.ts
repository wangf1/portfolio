import shortService from "@/backend/short/shortService";

const getShorts = async (skip: number, take: number) => {
  try {
    const shorts = await shortService.getShorts(skip, take);
    return Response.json(shorts);
  } catch (error) {
    console.log(error);
    return new Response("Error fetching comments", {
      status: 500,
    });
  }
};

const getShortsCount = async () => {
  try {
    const shortsCount = await shortService.getShortsCount();
    return Response.json(shortsCount);
  } catch (error) {
    console.log(error);
    return new Response("Error fetching shorts count", {
      status: 500,
    });
  }
};

const createShort = async (req: Request) => {
  try {
    const body = await req.json();
    const short = await shortService.createShort(body);
    return Response.json(short);
  } catch (error) {
    console.log(error);
    return new Response("Error creating short", {
      status: 500,
    });
  }
};

const updateThumbs = async (shortId: string, req: Request) => {
  try {
    const body = await req.json();
    const { isThumbUp } = body;
    const short = await shortService.updateThumbs(shortId, isThumbUp);
    return Response.json(short);
  } catch (error) {
    console.log(error);
    return new Response("Error updating thumbs", {
      status: 500,
    });
  }
};

export default {
  getShorts,
  createShort,
  updateThumbs,
  getShortsCount,
};
