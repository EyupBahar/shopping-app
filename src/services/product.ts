import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getPost: build.query<Product, number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (name) => ({ url: `product/${name}` }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Product }, meta, arg) =>
        response.data,
      providesTags: (result, error, id) => [{ type: "Product", id }],
      // The 2nd parameter is the destructured `QueryLifecycleApi`
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {},
      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        }
      ) {},
    }),
  }),
});
