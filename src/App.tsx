import { createBrowserRouter } from "react-router-dom";

import Layout from "layout/Layout";
import { AdminPage, CreateMenuGroupPage, CreateMenuItemPage, CreateStoreItemPage, HomePage, MenuPage, MenuItemPage, MenuGroupPage, LoginPage, Page404, PersonalPage, RegistrationPage, StoreItemPage, ThanksPage, SetPasswordPage } from "pages/_index";

import { withAdminAuth } from "hocs/withAdminAuth";
import { withAuth } from "hocs/withAuth";

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
                element: withAuth(PersonalPage),
            },
            {
                path: 'registration',
                element: <RegistrationPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'setPassword/:userId',
                element: <SetPasswordPage />,
            },
            {
                path: 'admin',
                element: withAdminAuth(AdminPage),
            },
            {
                path: 'admin/store/:itemId',
                element: withAdminAuth(StoreItemPage),
            },
            {
                path: 'admin/menuGroup/:itemId',
                element: withAdminAuth(MenuGroupPage),
            },
            {
                path: 'admin/menuItem/:itemId',
                element: withAdminAuth(MenuItemPage),
            },
            {
                path: 'admin/createStoreItem',
                element: withAdminAuth(CreateStoreItemPage),
            },
            {
                path: 'admin/createMenuGroup',
                element: withAdminAuth(CreateMenuGroupPage),
            },
            {
                path: 'admin/createMenuItem',
                element: withAdminAuth(CreateMenuItemPage),
            },
        ],
    },
]);
