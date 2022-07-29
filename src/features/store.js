import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { unsplashApi } from "./unsplashApi";
import unsplashReducer from "./unsplashSlice";

export const store = configureStore({
  reducer: {
    unsplash: unsplashReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware),
});

setupListeners(store.dispatch);
