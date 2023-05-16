import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFullData } from "types/basketType";

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

        sendBasketData: builder.mutation<any, IFullData>({
            query: (data) => ({
                url: "/send",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
        })
    }),
});

export const { useGetStoreQuery, useSendBasketDataMutation } = fetchStore;
