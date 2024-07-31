import {
  batchSize,
  Short,
  ShortCreationData,
  ShortQueryParams,
  ShortState,
} from "@/common/types/short/shortTypes";
import { toast } from "@/frontend/ui/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/shorts/";

const createShort = createAsyncThunk<Short, ShortCreationData>(
  "shorts/createShort",
  async (creationData) => {
    const response = await axios.post<Short>(BASE_URL, creationData);
    return response.data;
  }
);

const fetchShorts = createAsyncThunk<Short[], ShortQueryParams>(
  "shorts/fetchShorts",
  async ({ skip, take, tags }: ShortQueryParams) => {
    const queryParams = new URLSearchParams({
      skip: skip.toString(),
      take: take.toString(),
      ...(tags && tags.length > 0 ? { tags: tags.join(",") } : {}),
    });
    const response = await axios.get<Short[]>(`${BASE_URL}?${queryParams}`);
    return response.data;
  }
);

const fetchShortsCount = createAsyncThunk<number, void>(
  "shorts/fetchShortsCount",
  async () => {
    const response = await axios.get<number>(`${BASE_URL}count`);
    return response.data;
  }
);

const updateThumbs = createAsyncThunk<
  Short,
  { shortId: string; isThumbUp: boolean }
>("shorts/updateThumbs", async ({ shortId, isThumbUp }) => {
  const response = await axios.post(`${BASE_URL}${shortId}/thumbs`, {
    isThumbUp,
  });
  return response.data;
});

const initialState: ShortState = {
  shorts: [],
  shortsCount: 0,
  status: "idle",
};

const commentsSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShort.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shorts.push(action.payload);
        toast({
          title: "Success",
          description: "Short created successfully",
          duration: 3000,
        });
      })
      .addCase(createShort.rejected, (state, action) => {
        toast({
          title: "Error",
          description: "Something went wrong while creating the short",
          duration: 3000,
        });
      })
      .addCase(fetchShorts.fulfilled, (state, action) => {
        state.status = "idle";

        // Function to filter new shorts against the last <batchSize> items.
        function filterAgainstLastBatch() {
          const last10Shorts = state.shorts.slice(-batchSize);
          const existingShortsMap = new Map(
            last10Shorts.map((short) => [short._id, short])
          );

          const newShorts = action.payload.filter((short) => {
            const alreadyExistNeedFilterOut = existingShortsMap.has(short._id);
            if (alreadyExistNeedFilterOut) {
              console.log(
                `Short with _id: ${short._id} already exists in Redux, skipping it...`
              );
            }
            return !alreadyExistNeedFilterOut;
          });
          return newShorts;
        }

        const newShorts = filterAgainstLastBatch();
        state.shorts = [...state.shorts, ...newShorts];
        console.log(`Total shorts in Redux: ${state.shorts.length}`);
      })
      .addCase(fetchShorts.pending, (state) => {
        state.status = "fetching_shorts";
      })
      .addCase(fetchShortsCount.fulfilled, (state, action) => {
        state.shortsCount = action.payload;
      })
      .addCase(updateThumbs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateThumbs.fulfilled, (state, action) => {
        state.status = "idle";
        const short = state.shorts.find((s) => s._id === action.payload._id);
        if (short) {
          short.thumbUps = action.payload.thumbUps;
          short.thumbDowns = action.payload.thumbDowns;
        }
      });
  },
});

export { createShort, fetchShorts, fetchShortsCount, updateThumbs };
export default commentsSlice.reducer;
