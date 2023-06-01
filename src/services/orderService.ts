import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "./getToken";

import { IFullData } from "types/basketTypes";
import { IUserOrderResponse } from "types/orderTypes";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchOrder = createApi({
    reducerPath: "fetchOrder",
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    endpoints: (builder) => ({
        sendBasketData: builder.mutation<any, IFullData>({
            query: (data) => ({
                url: "/send",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
        }),

        getUserOrders: builder.query<IUserOrderResponse, void>({
            query: () => ({
                url: "/user/orders",
                headers: { Authorization: `Bearer ${getToken()}` },
            }),
        }),
    }),
});

export const { useSendBasketDataMutation, useGetUserOrdersQuery } = fetchOrder;
