import { createBrowserRouter } from "react-router-dom";

import Layout from "components/layout/Layout";
import { RequireAuth } from "hocs/RequireAuth";

import HomePage from "pages/HomePage";
import MenuPage from "pages/MenuPage";
import Page404 from "pages/Page404";
import ThanksPage from "pages/ThanksPage";
import PersonalPage from "pages/PersonalPage";
import AdminPage from "pages/AdminPage";
import UpdateItemPage from "pages/UpdateItemPage";
import CreateItemPage from "pages/CreateItemPage";
import LoginPage from "pages/LoginPage";
import RegistrationPage from "pages/RegisterPage";
import { RequireAdminAuth } from "hocs/RequireAdminAuth";

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
                path: 'admin/:itemId',
                element: <RequireAdminAuth children={<UpdateItemPage />} />,
            },
            {
                path: 'admin/create',
                element: <RequireAdminAuth children={<CreateItemPage />} />,
            },
        ],
    },
]);
