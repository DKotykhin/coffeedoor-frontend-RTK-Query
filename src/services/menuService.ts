import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "./getToken";

import { IDeleteResponse, IMenuGroup, IUpdateMenuGroup } from "types/menuTypes";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchMenu = createApi({
    reducerPath: "fetchMenu",
    tagTypes: ["Menu"],
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => ({
                url: "/menu",
            }),
            providesTags: ["Menu"],
        }),

        createMenuGroup: builder.mutation<IMenuGroup, IMenuGroup>({
            query: (data) => ({
                url: "/menugroup",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Menu"],
        }),

        updateMenuGroup: builder.mutation<IMenuGroup, IUpdateMenuGroup>({
            query: (data) => ({
                url: "/menugroup",
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Menu"],
        }),

        deleteMenuGroup: builder.mutation<
            IDeleteResponse,
            { _id: string | undefined }
        >({
            query: (_id) => ({
                url: "/menugroup",
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                params: { _id },
            }),
            invalidatesTags: ["Menu"],
        }),
    }),
});

export const { useGetMenuQuery, useCreateMenuGroupMutation } = fetchMenu;
