import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "./getToken";

import {
    IPasswordResponse,
    ISetPasswordResponse,
    IUserDeleteResponse,
    IUserLoginByTokenResponse,
    IUserResponse,
    IUserInfo,
    IUserLogin,
    IUserRegister,
} from "types/userTypes";

const Base_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchUser = createApi({
    reducerPath: "fetchUser",
    baseQuery: fetchBaseQuery({ baseUrl: Base_URL }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        fetchUserByToken: builder.query<IUserLoginByTokenResponse, void>({
            query: () => ({
                url: "/user/me",
                headers: { Authorization: `Bearer ${getToken()}` },
            }),
            providesTags: ["User"],
        }),

        fetchRegisterUser: builder.mutation<IUserResponse, IUserRegister>({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["User"],
        }),

        fetchLoginUser: builder.mutation<IUserResponse, IUserLogin>({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["User"],
        }),

        fetchSetPassword: builder.mutation<
            ISetPasswordResponse,
            { password: string; userId: string | undefined }
        >({
            query: (data) => ({
                url: "/auth/password",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }),
        }),

        fetchConfirmPassword: builder.mutation<
            IPasswordResponse,
            { password: string }
        >({
            query: (data) => ({
                url: "/user/password",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            }),
        }),

        fetchNewPassword: builder.mutation<
            IPasswordResponse,
            { password: string }
        >({
            query: (data) => ({
                url: "/user/password",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            }),
        }),

        fetchProfile: builder.mutation<IUserLoginByTokenResponse, IUserInfo>({
            query: (data) => ({
                url: "/user/me",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            }),
            invalidatesTags: ["User"],
        }),

        fetchDeleteUser: builder.mutation<IUserDeleteResponse, void>({
            query: () => ({
                url: "/user/me",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useFetchUserByTokenQuery,
    useFetchRegisterUserMutation,
    useFetchLoginUserMutation,
    useFetchSetPasswordMutation,
    useFetchConfirmPasswordMutation,
    useFetchNewPasswordMutation,
    useFetchProfileMutation,
    useFetchDeleteUserMutation,
} = fetchUser;
