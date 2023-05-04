import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchMenu = createApi({
    reducerPath: "fetchMenu",
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => ({
                url: "/menu",
            })
        })
    })
});

export const { useGetMenuQuery} = fetchMenu;