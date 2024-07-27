import {
  Short,
  ShortCreationData,
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

const fetchShorts = createAsyncThunk<Short[], void>(
  "shorts/fetchShorts",
  async () => {
    const response = await axios.get<Short[]>(BASE_URL);
    return response.data;
  }
);

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
      });
  },
});

export { createShort, fetchShorts };
export default commentsSlice.reducer;
