import { configureStore } from "@reduxjs/toolkit";

import blogsReducer from "@/frontend/lib/redux/blog/blogsSlice";
import commentsReducer from "@/frontend/lib/redux/blog/comments/commentsSlice";
import shortsReducer from "@/frontend/lib/redux/short/shortsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      comments: commentsReducer,
      blogs: blogsReducer,
      shorts: shortsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
