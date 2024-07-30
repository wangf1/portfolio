import shortController from "@/backend/short/shortController";

export async function GET(): Promise<Response> {
  return shortController.getShortsCount();
}
