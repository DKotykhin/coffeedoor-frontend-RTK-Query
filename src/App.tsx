import { createBrowserRouter } from "react-router-dom";

import Layout from "components/layout/Layout";
import { RequireAuth } from "hocs/RequireAuth";
import { RequireAdminAuth } from "hocs/RequireAdminAuth";

import { AdminPage, CreateMenuGroupPage, CreateMenuItemPage, CreateStoreItemPage, HomePage, MenuPage, MenuItemPage, MenuGroupPage, LoginPage, Page404, PersonalPage, RegistrationPage, StoreItemPage, ThanksPage } from "pages/_index";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Page404 />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'menu',
                element: <MenuPage />,
            },
            {
                path: 'thanks',
                element: <ThanksPage />,
            },
            {
                path: 'personal',
                element: <RequireAuth children={<PersonalPage />} />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'registration',
                element: <RegistrationPage />,
            },
            {
                path: 'admin',
                element: <RequireAdminAuth children={<AdminPage />} />,
            },
            {
                path: 'admin/store/:itemId',
                element: <RequireAdminAuth children={<StoreItemPage />} />,
            },
            {
                path: 'admin/menuGroup/:itemId',
                element: <RequireAdminAuth children={<MenuGroupPage />} />,
            },
            {
                path: 'admin/menuItem/:itemId',
                element: <RequireAdminAuth children={<MenuItemPage />} />,
            },
            {
                path: 'admin/createStoreItem',
                element: <RequireAdminAuth children={<CreateStoreItemPage />} />,
            },
            {
                path: 'admin/createMenuGroup',
                element: <RequireAdminAuth children={<CreateMenuGroupPage />} />,
            },
            {
                path: 'admin/createMenuItem',
                element: <RequireAdminAuth children={<CreateMenuItemPage />} />,
            },
        ],
    },
]);
