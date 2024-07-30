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
        // This helps to avoid duplicates when fetching the same batch multiple
        // times, while maintaining good performance and accuracy.
        // Sometimes especially in development env, useEffect could be called
        // multiple times for same state change.
        function filterAgainstLastBatch() {
          const last10Shorts = state.shorts.slice(-batchSize);

          const existingShortsMap = new Map(
            last10Shorts.map((short) => [short._id, short])
          );

          const newShorts = action.payload.filter(
            (short) => !existingShortsMap.has(short._id)
          );
          return newShorts;
        }
        const newShorts = filterAgainstLastBatch();

        state.shorts = [...state.shorts, ...newShorts];
      })
      .addCase(fetchShorts.pending, (state) => {
        state.status = "loading";
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

export { createShort, fetchShorts, updateThumbs };
export default commentsSlice.reducer;
