import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchStore = createApi({
    reducerPath: "fetchStore",
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        getStore: builder.query({
            query: () => ({
                url: "/store",
            }),
        }),
    }),
});

export const { useGetStoreQuery } = fetchStore;
