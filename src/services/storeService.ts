import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "./getToken";

import {
    ICreateStoreItem,
    IDeleteResponse,
    IStoreItem,
    IStoreItemResponse,
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

        createStoreItem: builder.mutation<IStoreItemResponse, ICreateStoreItem>(
            {
                query: (data) => ({
                    url: "/store",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }),
                invalidatesTags: ["Item"],
            }
        ),

        updateStoreItem: builder.mutation<IStoreItemResponse, IUpdatedData>({
            query: (data) => ({
                url: "/store",
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Item"],
        }),

        deleteStoreItem: builder.mutation<IDeleteResponse, string | undefined>({
            query: (storeId) => ({
                url: "/store",
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                params: { storeId },
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
