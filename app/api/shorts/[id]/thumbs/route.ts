import shortController from "@/backend/short/shortController";
import { NextRequest } from "next/server";
type Params = {
  id: string;
};
export async function POST(req: NextRequest, context: { params: Params }) {
  const shortId = context.params.id;
  return shortController.updateThumbs(shortId, req);
}
