import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "@/lib/redux/blog/comments/commentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      comments: commentsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
