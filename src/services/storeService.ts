import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
    ICreateStoreItem,
    IDeleteStoreItem,
    IStoreItem,
    IUpdatedData,
} from "types/storeTypes";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchStore = createApi({
    reducerPath: "fetchStore",
    tagTypes: ["Item"],
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        getStore: builder.query<IStoreItem[], string>({
            query: () => ({
                url: "/store",
            }),
            providesTags: ["Item"],
        }),

        createStoreItem: builder.mutation<any, ICreateStoreItem>({
            query: (data) => ({
                url: "/store",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Item"],
        }),

        updateStoreItem: builder.mutation<any, IUpdatedData>({
            query: (data) => ({
                url: "/store",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Item"],
        }),

        deleteStoreItem: builder.mutation<any, IDeleteStoreItem>({
            query: (data) => ({
                url: "/store",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Item"],
        }),
    }),
});

export const {
    useGetStoreQuery,
    useCreateStoreItemMutation,
    useUpdateStoreItemMutation,
    useDeleteStoreItemMutation,
} = fetchStore;
