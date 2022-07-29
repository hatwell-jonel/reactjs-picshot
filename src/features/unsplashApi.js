import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESSKEY;
const SEARCH_URL = `https://api.unsplash.com/search/photos?`;

export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SEARCH_URL,
  }),
  endpoints: (builder) => ({
    getPhotosBySearch: builder.query({
      query: (search) => `&query=${search}&per_page=30&client_id=${ACCESS_KEY}`,
    }),
  }),
});

export const { useGetPhotosBySearchQuery } = unsplashApi;
