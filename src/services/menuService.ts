import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "./getToken";

import {
    ICreateMenuGroup,
    ICreateMenuItem,
    IUpdateMenuGroup,
    IUpdateMenuItem,
    IMenuGroupResponse,
    IMenuItemResponse,
    IMenuDeleteResponse,
} from "types/menuTypes";

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

        createMenuGroup: builder.mutation<IMenuGroupResponse, ICreateMenuGroup>(
            {
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
            }
        ),

        updateMenuGroup: builder.mutation<IMenuGroupResponse, IUpdateMenuGroup>(
            {
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
            }
        ),

        deleteMenuGroup: builder.mutation<
            IMenuDeleteResponse,
            string | undefined
        >({
            query: (groupId) => ({
                url: "/menugroup",
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                params: { groupId },
            }),
            invalidatesTags: ["Menu"],
        }),

        createMenuItem: builder.mutation<IMenuItemResponse, ICreateMenuItem>({
            query: (data) => ({
                url: "/menuitem",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Menu"],
        }),

        updateMenuItem: builder.mutation<IMenuItemResponse, IUpdateMenuItem>({
            query: (data) => ({
                url: "/menuitem",
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["Menu"],
        }),

        deleteMenuItem: builder.mutation<
            IMenuDeleteResponse,
            string | undefined
        >({
            query: (itemId) => ({
                url: "/menuitem",
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "Content-Type": "application/json",
                },
                params: { itemId },
            }),
            invalidatesTags: ["Menu"],
        }),
    }),
});

export const {
    useGetMenuQuery,
    useCreateMenuGroupMutation,
    useUpdateMenuGroupMutation,
    useDeleteMenuGroupMutation,
    useCreateMenuItemMutation,
    useUpdateMenuItemMutation,
    useDeleteMenuItemMutation,
} = fetchMenu;
